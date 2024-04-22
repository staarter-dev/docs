---
title: S3 Storage
nextjs:
  metadata:
    title: S3 Storage
    description: Learn how to use Amazon S3 storage with staarter.dev.
---

Amazon Simple Storage Service (S3) is a scalable cloud storage solution that allows you to store and retrieve data securely. By integrating Amazon S3 with staarter.dev, you can easily manage files, images, and other assets in your application.

## Set Environment Variables

To get started with Amazon S3 storage in staarter.dev, you need to set up the following environment variables:

```bash
S3_REGION="us-east-1"
S3_ENDPOINT="YOUR_S3_ENDPOINT" # Optional, if you use a custom endpoint
S3_FORCE_PATH_STYLE="true"
S3_ACCESS_KEY_ID="YOUR_S3_ACCESS_KEY_ID"
S3_SECRET_ACCESS_KEY="YOUR_S3_SECRET_ACCESS_KEY"
```

You can obtain the necessary credentials by creating an IAM user with the appropriate permissions in the AWS Management Console. Make sure to keep your credentials secure and do not expose them in your codebase.

## Using S3 Storage

Import the `storage` module to interact with Amazon S3 in your application:

```typescript
import storage from 'storage'
```

Check the interface of the storage module to see the available methods in `packages/storage/src/providers/types.ts` and the S3 specific implementation in `packages/storage/src/providers/s3/index.ts`.
