/*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'xdeal-ml.myshopify.com',
          storefrontAccessToken: '1a07999e7a52d14ed6cf8969b2f5fd7d',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1735082868834],
            node: document.getElementById('product-component-4f8afad3866'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "layout": "horizontal",
    "variantId": "all",
    "width": "100%",
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "description": true,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#42a3da",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#3b93c4"
        },
        ":focus": {
          "background-color": "#3b93c4"
        }
      },
      "title": {
        "font-size": "26px"
      },
      "price": {
        "font-size": "18px"
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      },
      "compareAt": {
        "font-size": "15px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#42a3da",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#3b93c4"
        },
        ":focus": {
          "background-color": "#3b93c4"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#42a3da",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        ":hover": {
          "background-color": "#3b93c4"
        },
        ":focus": {
          "background-color": "#3b93c4"
        }
      },
      "quantityInput": {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px"
      }
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#42a3da",
        ":hover": {
          "background-color": "#3b93c4"
        },
        ":focus": {
          "background-color": "#3b93c4"
        }
      },
      "count": {
        "font-size": "18px"
      }
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/