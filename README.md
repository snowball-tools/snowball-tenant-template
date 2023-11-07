# snowball-tenant-template

This is a template for creating a new tenant nextjs app. It is a work in progress.

## Installation

```sh
yarn install
```

## Development

```sh
yarn dev
```

## Prisma

### Generate Prisma Client

```sh
yarn prisma generate
```

### Migrate Database

```sh
yarn prisma migrate dev
```

## Apple App Association (for now, this will need to become dynamic)

Associate iOS Bundle Ids to this domain

- update `public/.well-known/apple-app-site-association`

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "<Bundle ID>",
        "paths": ["*"]
      }
    ]
  }
}
```

- for next.js ensure `public/.well-known` is served `content-type` as `application/json` by configuring `next.config.js`

```js
...
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "content-type", value: "application/json" }],
      },
    ];
  },
...
```

- test the association

```sh
curl -v <domain>/.well-known/apple-app-site-association
```
