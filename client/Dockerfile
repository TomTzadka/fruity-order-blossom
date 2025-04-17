FROM node:18-alpine

WORKDIR /app

# Copy package info
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source files
COPY . .

EXPOSE 8080

# Run dev server
CMD ["yarn", "dev", "--host"]
