FROM node
WORKDIR /star-rating
COPY ./ ./
RUN yarn install
EXPOSE 8080
CMD ["yarn", "start"]