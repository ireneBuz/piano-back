const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const blogSchema = new Schema(
  {
    imageSrc: {
      type: String,
      required: [true, 'imageSrc is required.'],

    },
    titleCardEng: {
      type: String,
      required: [true, 'titleCardEng is required.']
    },
    titleCardSpa: {
      type: String,
      required: [true, 'titleCardSpa is required.']
    },
    titleBlogEng: {
      type: String,
      required: [true, 'titleBlogEng is required.']
    },
    titleBlogSpa: {
      type: String,
      required: [true, 'titleBlogSpa is required.']
    },
    excerptEng: {
      type: String,
      required: [true, 'excerptEng is required.']
    },
    excerptSpa: {
      type: String,
      required: [true, 'excerptSpa is required.']
    },
    excerptArticleEng: {
      type: String,
      required: [true, 'excerptArticleEng is required.']
    },
    excerptArticleSpa: {
      type: String,
      required: [true, 'excerptArticleSpa is required.']
    },
    readMoreLinkEng: {
      type: String,
      required: [true, 'readMoreLinkEng is required.']
    },
    readMoreLinkSpa: {
      type: String,
      required: [true, 'readMoreLinkSpa is required.']
    },
    articleEng: {
      type: String,
      required: [true, 'articleEng is required.']
    },
    articleSpa: {
      type: String,
      required: [true, 'articleSpa is required.']
    },
    dateEng: {
      type: String,
      required: [true, 'dateEng is required.']
    },
    dateSpa: {
      type: String,
      required: [true, 'dateSpa is required.']
    },
    metaDataTitleEng: {
      type: String,
      required: [true, 'metaDataTitleEng is required.']
    },
    metaDataTitleSpa: {
      type: String,
      required: [true, 'metaDataTitleSpa is required.']
    },
    metaDataDescriptionEng: {
      type: String,
      required: [true, 'metaDataDescriptionEng is required.']
    },
    metaDataDescriptionSpa: {
      type: String,
      required: [true, 'metaDataDescriptionSpa is required.']
    },
    metaDataKeywordsEng: {
      type: String,
      required: [true, 'metaDataKeywordsEng is required.']
    },
    metaDataKeywordsSpa: {
      type: String,
      required: [true, 'metaDataKeywordsSpa is required.']
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Blog = model("Blog", blogSchema);

module.exports = Blog;
