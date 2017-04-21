//
//  SubEventEmit.m
//  demo01
//
//  Created by 朱大茂 on 2017/4/19.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "SubEventEmit.h"

@implementation SubEventEmit

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];//有几个就写几个
}


-(void)iseCallback:(NSArray*)code {
  [self sendEventWithName:@"EventReminder"
                     body:code];
}


@end
