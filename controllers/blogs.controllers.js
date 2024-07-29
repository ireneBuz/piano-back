const Blog = require("../models/Blog.model");

const router = require("express").Router();

const getAllBlogsCards = (req, res, next) => {
  const { lang } = req.query;
  let queryParams = [];
  const fixedQueryParams = ["imageSrc"];
  if (lang?.toUpperCase() === "SPA") {
    queryParams = [
      ...fixedQueryParams,
      "titleCardSpa",
      "excerptSpa",
      "readMoreLinkSpa",
      "dateSpa",
    ];
  } else if (lang?.toUpperCase() === "ENG") {
    queryParams = [
      ...fixedQueryParams,
      "titleCardEng",
      "excerptEng",
      "readMoreLinkEng",
      "dateEng",
    ];
  }

  Blog.find()
    .select(queryParams)
    .sort({ _id: -1 })
    .then((result) => {
      return res.json(result);
    })
    .catch(({ message }) => {
      return res.json(message);
    });
};

const getAllBlogsArticles = (req, res, next) => {
  const { readMoreLink } = req.params;
  const { lang } = req.query;
  let queryKey;
  let queryParams = [];
  const fixedQueryParams = ["imageSrc"];
  if (lang?.toUpperCase() === "SPA") {
    queryKey = "readMoreLinkSpa";
    queryParams = [
      ...fixedQueryParams,
      "titleBlogSpa",
      "excerptArticleSpa",
      "articleSpa",
      "metaDataTitleSpa",
      "metaDataDescriptionSpa",
      "metaDataKeywordsSpa",
    ];
  } else if (lang?.toUpperCase() === "ENG") {
    queryKey = "readMoreLinkEng";
    queryParams = [
      ...fixedQueryParams,
      "titleBlogEng",
      "excerptArticleEng",
      "articleEng",
      "metaDataTitleEng",
      "metaDataDescriptionEng",
      "metaDataKeywordsEng",
    ];
  }

  Blog.findOne({ [queryKey]: readMoreLink })
    .select(queryParams)
    .then((result) => {
      return res.json(result);
    })
    .catch(({ message }) => {
      return res.json(message);
    });
};

const createBlog = (req, res, next) => {
  const blogData = req.body;
  Blog.create(blogData)
    .then((result) => {
      return res.json(result);
    })
    .catch(({ message }) => {
      return res.json(message);
    });
};
module.exports = {
  getAllBlogsCards,
  createBlog,
  getAllBlogsArticles,
};
