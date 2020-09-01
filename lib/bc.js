import "isomorphic-unfetch";

const API_URL = process.env.NEXT_EXAMPLE_BIGCOMMERCE_STOREFRONT_API_URL;
const API_TOKEN = process.env.NEXT_EXAMPLE_BIGCOMMERCE_STOREFRONT_API_TOKEN;

const responsiveImageFragment = `
  fragment responsiveImageFragment on Image {
    url320wide: url(width: 320)
    url640wide: url(width: 640)
    url960wide: url(width: 960)
    url1280wide: url(width: 1280)
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.post;
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      allPosts {
        slug
      }
    }
  `);
  return data?.allPosts;
}

export async function getAllProductsForHome() {
  const data = await fetchAPI(
    `
    query paginateProducts {
      site {
        products (first: 4) {
          pageInfo {
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              entityId
              name
              path
              brand {
                name
              }
              description
              prices {
                price {
                  value
                  currencyCode
                }
                salePrice {
                  value
                  currencyCode
                }
              }
              images {
                edges {
                  node {
                    ...responsiveImageFragment
                  }
                }
              }
              variants {
                edges {
                  node {
                    entityId
                    defaultImage {
                      ...responsiveImageFragment
                    }
                  }
                }
              }
              options {
                edges {
                  node {
                    entityId
                    displayName
                    isRequired
                    values {
                      edges {
                        node {
                          entityId
                          label
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    ${responsiveImageFragment}
  `
  );
  return data?.site?.products?.edges;
}

export async function getAllProductsWithSlug() {
  const data = fetchAPI(`
    {
      site {
        products {
          edges {
            node {
              path
            }
          }
        }
      }
    }
  `);
  return data?.site?.products?.edges;
}

export async function getProduct(slug) {
  const data = await fetchAPI(
    `
  query ProductBySlug($slug: String!) {
    site {
      route(path: $slug) {
        node {
          __typename
          ... on Product {
            entityId
            name
            path
            brand {
              name
            }
            description
            prices {
              price {
                currencyCode
                value
              }
              salePrice {
                currencyCode
                value
              }
            }
            images {
              edges {
                node {
                  url640wide: url(width: 640)
                  url1280wide: url(width: 1280)
                }
              }
            }
            variants {
              edges {
                node {
                  entityId
                }
              }
            }
            options {
              edges {
                node {
                  entityId
                  displayName
                  isRequired
                  values {
                    edges {
                      node {
                        entityId
                        label
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `,
    {
      variables: {
        slug,
      },
    }
  );
  return data;
}

export async function getRelatedProducts(slug) {
  const data = await fetchAPI(
    `
    {
      site {
        products(entityIds: [80,81,82,83]) {
        edges {
          node {
            entityId
            name
            path
            brand {
              name
            }
            description
            prices {
              price {
                currencyCode
                value
              }
              salePrice {
                currencyCode
                value
              }
            }
            images {
              edges {
                node {
                  url640wide: url(width: 640)
                  url1280wide: url(width: 1280)
                }
              }
            }
            variants {
              edges {
                node {
                  entityId
                }
              }
            }
          }
        }
      }
    }
  }
  `,
    {
      variables: {
        slug,
      },
    }
  );

  return data;
}
