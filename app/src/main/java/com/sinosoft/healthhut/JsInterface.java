package com.sinosoft.healthhut;


import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;

import com.google.gson.Gson;
import com.sinosoft.healthhut.entity.User;

import org.json.JSONObject;


public class JsInterface {
    private Handler handler = new Handler(Looper.getMainLooper());
    private String userId;
    private WebView webView;
    private Context context;
    public JsInterface(Context context, WebView webView, String userId){
        this.userId =userId;
        this.webView = webView;
        this.context = context;
    }
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
    @JavascriptInterface
    public void goBack(){
        Log.d("222","走了");
        handler.post(new Runnable() {
            @Override
            public void run() {
                if(webView.canGoBack()){
                    Log.d("走了","dddd");
                    webView.goBack();

                }else {
                    ((MainActivity)context).finish();
                }
            }
        });

    }

    @JavascriptInterface
    public void WSKUserId(){
        Log.d("333","zoule");
         User user =new User();
         user.setUserId(userId);
         Gson gson =new Gson();
         String jsonStr = gson.toJson(user);
         handler.post(new Runnable() {
             @Override
             public void run() {
                 webView.evaluateJavascript("WSKUserIdResult("+jsonStr+")", new ValueCallback<String>() {
                     @Override
                     public void onReceiveValue(String s) {

                     }
                 });
             }
         });

    }
}
