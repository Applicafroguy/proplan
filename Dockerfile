#
#   Get from 
#
FROM davidkassa/yarn-angular-cli-firebase-tools

# Copy dir
LABEL authors="Sivuyile Magutywa"
WORKDIR /usr/src/app

# Install packages
RUN yarn


COPY ["package.json", "npm-shrinkwrap.json*", "./"]
COPY . .
RUN ng build --prod
EXPOSE 6000

CMD ["yarn", "start"]
