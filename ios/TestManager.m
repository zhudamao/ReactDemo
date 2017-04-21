//
//  TestManager.m
//  demo01
//
//  Created by 朱大茂 on 2017/4/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestManager.h"
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation TestManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(doAnyThing:(NSDictionary *)params callBack:(RCTResponseSenderBlock )callback){
  callback(@[[NSNull null],params.allKeys]);
  
}

RCT_EXPORT_METHOD(jsCallOring:(NSArray *)arry){
  [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder"
                                               body:arry];
}

RCT_REMAP_METHOD(testPromiseEvent, resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){

  
  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    
    resolve(@[@1,@2,@3]);
  });
}





// 原生常量 供js 端调用
-(NSDictionary *)constantsToExport
{
  // 此处定义的常量为js订阅原生通知的通知名
  return @{@"receiveNotificationName":@"receive_notification_test"};
}



@end
