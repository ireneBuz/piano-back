const Blog = require("../models/Blog.model");

const router = require("express").Router();

const slides = [
    {
        imageSrc: '/images/blog7.webp',
        title: 'Aprende a Componer tus Propias Piezas de Piano Fácilmente',
        excerpt: 'La composición y la improvisación al piano pueden parecer habilidades reservadas para músicos avanzados, pero la realidad es que cualquier persona, incluso sin conocimientos previos, puede aprender a crear sus propias piezas.',
        readMoreLink: '/blog/composicion-e-improvisacion-al-piano',
        date: '22 - Mayo - 2024'
    },

    {
        imageSrc: '/images/blog6.webp',
        title: 'Por qué estudiar piano y teoría musical a cualquier edad',
        excerpt: 'La música es un arte que acoge a todos, sin importar la edad que se tenga al empezar su estudio.',
        readMoreLink: '/blog/por-que-estudiar-piano-y-teoria-musical-a-cualquier-edad',
        date: '8 - Marzo - 2024'
    },
    {
        imageSrc: '/images/blog5.webp',
        title: 'Empieza el año tocando el piano',
        excerpt: 'El comienzo de un nuevo año ofrece la oportunidad perfecta para explorar nuevas experiencias y adquirir habilidades que enriquezcan nuestras vidas.',
        readMoreLink: '/blog/empieza-el-2024-tocando-el-piano',
        date: '14 - Enero - 2024'
    },

    {
        imageSrc: '/images/blog4.webp',
        title: 'Por dónde empezar',
        excerpt: 'La elección de la música adecuada es esencial para cualquier pianista, independientemente de su nivel de habilidad.Tocar una pieza que se adapte a tu nivel no solo te ayudará a mejorar tu destreza, sino que también te permitirá disfrutar más del proceso de aprendizaje.Aquí te damos algunos consejos para encontrar la pieza perfecta',
        readMoreLink: '/blog/por-donde-empezar-a-tocar-piano',
        date: '15 - Diciembre - 2023'
    },
    {
        imageSrc: '/images/blog3.webp',
        title: 'Mejora tu técnica de piano',
        excerpt: 'La técnica es un aspecto fundamental en el aprendizaje del piano. Una sólida técnica no solo te permitirá tocar con precisión y expresión, sino que también te abrirá las puertas a un repertorio más amplio y desafiante.Aquí te ofrecemos algunos consejos para mejorar tu técnica:',
        readMoreLink: '/blog/mejora-tu-tecnica-de-piano',
        date: '23 - Noviembre - 2023'
    },
    {
        imageSrc: '/images/blog2.webp',
        title: 'Beneficios cognitivos de la teoría musical',
        excerpt: 'La música es mucho más que una forma de expresión artística; también tiene beneficios significativos para el desarrollo cognitivo.Estudiar teoría musical no solo te permite comprender mejor la música, sino que también puede mejorar tus habilidades mentales y emocionales.Aquí te presentamos algunos de los beneficios cognitivos de adentrarte en el mundo de la teoría musical: ',
        readMoreLink: '/blog/beneficios-cognitivos-de-estudiar-teoria-musical',
        date: '10 - Noviembre - 2023'
    },
    {
        imageSrc: '/images/blog1.webp',
        title: 'Diferentes estilos en el piano',
        excerpt: 'El piano es un instrumento versátil que te permite sumergirte en una amplia gama de estilos musicales.La exploración de diferentes estilos no solo enriquecerá tu repertorio, sino que también te brindará una comprensión más profunda de la música en su conjunto.Aquí te presentamos algunos de los estilos musicales que puedes explorar en el piano: ',
        readMoreLink: '/blog/diferentes-estilos-musicales-en-el-piano',
        date: '18 - Octubre - 2023'
    },


];

const getAllBlogsCards = (req, res, next) => {

    const { lang } = req.query
    let queryParams = []
    const fixedQueryParams = ["imageSrc"]
    if (lang?.toUpperCase() === "SPA") {
        queryParams = [...fixedQueryParams, "titleCardSpa", "excerptSpa", "readMoreLinkSpa", "dateSpa"]
    }
    else if (lang?.toUpperCase() === "ENG") {
        queryParams = [...fixedQueryParams, "titleCardEng", "excerptEng", "readMoreLinkEng", "dateEng"]
    }

    Blog.find()
        .select(queryParams)
        .then((result) => {
            return res.json(result)

        })
        .catch(({ message }) => {
            return res.json(message)
        })
};

const getAllBlogsArticles = (req, res, next) => {
    const { readMoreLink } = req.params
    const { lang } = req.query
    let queryKey
    let queryParams = []
    const fixedQueryParams = ["imageSrc"]
    if (lang?.toUpperCase() === "SPA") {
        queryKey = "readMoreLinkSpa"
        queryParams = [...fixedQueryParams, "titleBlogSpa", "excerptArticleSpa", "articleSpa", "metaDataTitleSpa", "metaDataDescriptionSpa", "metaDataKeywordsSpa"]

    }
    else if (lang?.toUpperCase() === "ENG") {
        queryKey = "readMoreLinkEng"
        queryParams = [...fixedQueryParams, "titleBlogEng", "excerptArticleEng", "articleEng", "metaDataTitleEng", "metaDataDescriptionEng", "metaDataKeywordsEng"]
    }

    Blog.findOne({ [queryKey]: readMoreLink })
        .select(queryParams)
        .then((result) => {
            return res.json(result)

        })
        .catch(({ message }) => {
            return res.json(message)
        })
};


const createBlog = (req, res, next) => {
    const blogData = req.body
    Blog.create(blogData)
        .then((result) => {
            return res.json(result)

        })
        .catch(({ message }) => {
            return res.json(message)
        })
};
module.exports = {
    getAllBlogsCards,
    createBlog,
    getAllBlogsArticles
};