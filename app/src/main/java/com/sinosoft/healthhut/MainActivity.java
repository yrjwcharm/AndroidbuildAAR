package com.sinosoft.healthhut;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    private WebView webView;
    private String userId;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.health_hut_main);
        webView = findViewById(R.id.webview);
        Intent intent = getIntent();
        userId = intent.getStringExtra("userId");
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        webView.loadUrl("file:///android_asset/index.html");
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
//                if(Build.VERSION.SDK_INT<26) {
//                    view.loadUrl(url);
//                    return true;
//                }
                return true;
            }
        });
        webView.addJavascriptInterface(new JsInterface(this,webView,userId),"Android");
//        webView.loadUrl("file:///android_asset/index.html");


    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if ((keyCode == KeyEvent.KEYCODE_BACK) ) {
            Log.d("tadfd",webView.canGoBack()+"");
            if (webView.canGoBack()) {
                Log.d("back","返回") ;
                webView.goBack(); //goBack()表示返回WebView的上一页面
                return true;
            }else
            {
                finish();
                return true;
            }

        }
        return false;
    }
}