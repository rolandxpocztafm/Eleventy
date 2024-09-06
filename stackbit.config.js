// stackbit.config.js
import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  contentSources: [
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID_01,
      environment: process.env.CONTENTFUL_ENVIRONMENT_01,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN_01,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN_01
    }),
    new ContentfulContentSource({
      spaceId: process.env.CONTENTFUL_SPACE_ID_02,
      environment: process.env.CONTENTFUL_ENVIRONMENT_02,
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN_02,
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN_02
    })
  ]
  // ...
};
