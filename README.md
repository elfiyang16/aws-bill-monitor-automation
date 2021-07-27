# AWS-DAILY-BILL-RUNNER

_A lambda functions that runs daily at 9 am UTC to check the cost from the day before._

#### Get start:

- install dependencies

  ```
  npm install
  ```

- configure aws resources
  Create a sns topic in AWS and subscribe to your email address. Name the Topic as `AWS-Bill-Runner`.

  Go into Systems Manager and create a encrypted parameter `/checkBill/snsTopicArn/` to store the `arn` of the SNS topic `AWS-Bill-Runner`.

- deploy to AWS using serverless

  ```
  sls deploy --aws-profile <YOUR_PROFILE>
  ```

Note that the default stack is deployed `eu-west-1`. Please change the setting in the `serverless.yml` if that's not your preferred REGION.

Also, note that the Cost Explorer API COST MONEY... It's $0.01 per call as documented here: https://aws.amazon.com/aws-cost-management/pricing/
