//
//  SubEventEmit.h
//  demo01
//
//  Created by 朱大茂 on 2017/4/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTEventEmitter.h>

@interface SubEventEmit : RCTEventEmitter <RCTBridgeModule>

-(void)iseCallback:(NSArray*)code;

@end
