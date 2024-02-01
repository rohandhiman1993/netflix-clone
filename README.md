## next

`npx create-next-app --typescript`

```css
appearance-none
focus:ring-0
peer

group
group/item
```

## prisma

`npm i -D prisma` `npx prisma init`

`npm i @prisma/client`

```js
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id             String    @id @default(auto()) @map("_id") @db.ObjectId
  name           String
  image          String?
  email          String?   @unique
  emailVerified  DateTime?
  hashedPassword String?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt
  favoriteIds    String[]  @db.ObjectId
  sessions       Session[]
  accounts       Account[]
}

model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String @unique
  userId       String @db.ObjectId
  User         User   @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  identifier String
  token      String   @unique
  expire     DateTime

  @@unique([identifier, token])
}

model Movie {
  id          String @id @default(auto()) @map("_id") @db.ObjectId
  title       String
  description String
  videoUrl    String
  thumnailUrl String
  genre       String
  duration    String
}


```

`npx prisma db push`

`npm i next-auth bcrypt`
