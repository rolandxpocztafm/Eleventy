import { ContentfulContentSource } from "@stackbit/cms-contentful";

export default {
  contentSources: [
    new ContentfulContentSource({
      spaceId: "your_space_id",
      environment: "your_environment",
      previewToken: "your_preview_token",
      accessToken: "your_management_token"
    })
  ]
  // Other configurations if necessary
};
