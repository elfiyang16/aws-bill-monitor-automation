import AWS from 'aws-sdk';
AWS.config.update({ region: 'us-east-1' });

const costexplorer = new AWS.CostExplorer({ apiVersion: '2017-10-25' });

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

export const getDailyCost = async () => {
  return await costexplorer
    .getCostAndUsage({
      TimePeriod: {
        End: today.toISOString().split('T')[0],
        Start: yesterday.toISOString().split('T')[0],
      },
      Granularity: 'DAILY',
      GroupBy: [
        {
          Type: 'DIMENSION',
          Key: 'SERVICE',
        },
        {
          Type: 'DIMENSION',
          Key: 'REGION',
        },
      ],
      Metrics: ['BLENDED_COST'],
    })
    .promise();
};
