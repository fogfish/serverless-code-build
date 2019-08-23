import { Function } from '@aws-cdk/aws-lambda'
import { LambdaFunction } from '@aws-cdk/aws-events-targets'
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway'
import { LogGroup } from '@aws-cdk/aws-logs'
import { Rule } from '@aws-cdk/aws-events'
import { iaac, wrap } from 'aws-cdk-pure'
import { Role } from '@aws-cdk/aws-iam';

export const lambda = iaac(Function)

export const gateway = iaac(RestApi)

export const logs = iaac(LogGroup)

export const rule = iaac(Rule)

export const role = iaac(Role)

export const events = wrap(LambdaFunction)

export const resource = wrap(LambdaIntegration)

