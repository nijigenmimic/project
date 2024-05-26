# にじげんミミック
# バージョン：1.0

# npm update
npm install -g npm@latest

# nest js version check
nest --version

# nest js update
npm install -g @nestjs/cli npm-check-updatesnest
npm-check-updates "/@nestjs*/" -u
npm-check-updates "/nestjs*/" -u
npm install

# nest js build
npm build

# nest js debug
npm run start:debug

# nest js start
npm run start
