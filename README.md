==================== MainActivity.java ====================

package com.rhn.capital;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.util.Patterns;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.*;

import androidx.appcompat.app.AppCompatActivity;

import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity {

    FirebaseAuth auth;

    LinearLayout loginLayout;
    EditText email, password;
    Button loginBtn;

    WebView webView;
    ProgressBar loader;
    TextView offlineText;

    String URL = "https://rhncptl.live";

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        auth = FirebaseAuth.getInstance();

        getWindow().setFlags(
                WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN
        );

        if(auth.getCurrentUser() != null){
            openApp();
        } else {
            showLogin();
        }
    }

    private void showLogin(){
        loginLayout = new LinearLayout(this);
        loginLayout.setOrientation(LinearLayout.VERTICAL);
        loginLayout.setPadding(40,100,40,40);

        email = new EditText(this);
        email.setHint("Email");

        password = new EditText(this);
        password.setHint("Password");

        loginBtn = new Button(this);
        loginBtn.setText("Login / Register");

        loginLayout.addView(email);
        loginLayout.addView(password);
        loginLayout.addView(loginBtn);

        setContentView(loginLayout);

        loginBtn.setOnClickListener(v -> loginUser());
    }

    private void loginUser(){
        String e = email.getText().toString();
        String p = password.getText().toString();

        if(!Patterns.EMAIL_ADDRESS.matcher(e).matches()){
            toast("Email tidak valid");
            return;
        }

        if(p.length()<6){
            toast("Password minimal 6 karakter");
            return;
        }

        auth.signInWithEmailAndPassword(e,p)
                .addOnCompleteListener(task -> {
                    if(task.isSuccessful()){
                        openApp();
                    } else {
                        registerUser(e,p);
                    }
                });
    }

    private void registerUser(String e,String p){
        auth.createUserWithEmailAndPassword(e,p)
                .addOnCompleteListener(task -> {
                    if(task.isSuccessful()){
                        openApp();
                    } else {
                        toast("Login gagal");
                    }
                });
    }

    private void openApp(){

        FrameLayout layout = new FrameLayout(this);

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#020617"));

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);

        loader = new ProgressBar(this);
        FrameLayout.LayoutParams loaderParams = new FrameLayout.LayoutParams(
                FrameLayout.LayoutParams.WRAP_CONTENT,
                FrameLayout.LayoutParams.WRAP_CONTENT
        );
        loaderParams.gravity = Gravity.CENTER;

        offlineText = new TextView(this);
        offlineText.setText("Tidak ada internet");
        offlineText.setTextColor(Color.WHITE);
        offlineText.setGravity(Gravity.CENTER);
        offlineText.setVisibility(View.GONE);

        layout.addView(webView);
        layout.addView(loader, loaderParams);
        layout.addView(offlineText);

        setContentView(layout);

        if(isOnline()){
            webView.setWebViewClient(new WebViewClient(){
                @Override
                public void onPageFinished(WebView view, String url) {
                    loader.setVisibility(View.GONE);
                }
            });
            webView.loadUrl(URL);
        } else {
            webView.setVisibility(View.GONE);
            loader.setVisibility(View.GONE);
            offlineText.setVisibility(View.VISIBLE);
        }
    }

    private boolean isOnline(){
        ConnectivityManager cm = (ConnectivityManager)
                getSystemService(CONNECTIVITY_SERVICE);
        NetworkInfo net = cm.getActiveNetworkInfo();
        return net != null && net.isConnected();
    }

    private void toast(String msg){
        Toast.makeText(this,msg,Toast.LENGTH_SHORT).show();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}


==================== AndroidManifest.xml ====================

<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.rhn.capital">

    <uses-permission android:name="android.permission.INTERNET"/>
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>

    <application
        android:allowBackup="true"
        android:label="RHN Capital"
        android:theme="@style/Theme.AppCompat.Light.NoActionBar">

        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>

    </application>
</manifest>


==================== build.gradle (Module: app) ====================

plugins {
    id 'com.android.application'
    id 'com.google.gms.google-services'
}

android {
    compileSdk 34

    defaultConfig {
        applicationId "com.rhn.capital"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }

    buildTypes {
        release {
            minifyEnabled false
        }
    }
}

dependencies {
    implementation 'androidx.appcompat:appcompat:1.6.1'
    implementation 'com.google.firebase:firebase-auth:22.3.0'
}


==================== build.gradle (Project) ====================

buildscript {
    dependencies {
        classpath 'com.google.gms:google-services:4.4.0'
    }
}
