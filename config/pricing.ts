
export const pricing = [
    {
      title: "Professional",
      description: "Everything a small team needs.",
      price: "5899",
      priceDecimals: ".00",
      currency: "INR / monthly",
      features: [
        "Up to 10 people",
        "Collect data",
        "Code extensibility",
        "Custom reports",
        "Product support",
        "Activity reporting",
      ],
      cta: "Start free trial",
      ctaVariant: "outline",
      popular: true,
    },
    {
      title: "Teams",
      description: "A plan for bigger teams.",
      price: "9899",
      priceDecimals: ".99",
      currency: "INR / monthly",
    //   corret feature with yes no if yes then show check sign
      features: {
        classes: "Up to 10 people",
        
        
      },
      cta: "Start free trial",
      ctaVariant: "outline",
      popular: false,
    },
  ];

  export const features = [
    {
      category: "General",
      details: [
        {
          title: "Number of Instituions",
          basic: "1",
          startup: "Up to 3",
          team: "Up to 5",
          enterprise: "Unlimited",
        },
        {
          title: "Email sharing",
          basic: true,
          startup: true,
          team: false,
          enterprise: false,
        },
        {
          title: "Any time, anywhere access",
          basic: true,
          startup: true,
          team: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Financial data",
      details: [
        {
          title: "Open/High/Low/Close",
          basic: true,
          startup: true,
          team: true,
          enterprise:false,
        },
        {
          title: "Price-volume difference indicator",
          basic: true,
          startup: true,
          team: true,
          enterprise:false,
        },
      ],
    },
    {
      category: "On-chain data",
      details: [
        {
          title: "Network growth",
          basic: true,
          startup: true,
          team: true,
          enterprise:false,
        },
        {
          title: "Average token age consumed",
          basic: true,
          startup: true,
          team: false,
          enterprise:true,
        },
      ],
    },
    {
      category: "Social data",
      details: [
        {
          title: "Social volume",
          basic: true,
          startup: true,
          team: false,
          enterprise:false,
        },
        {
          title: "Social engagement",
          basic: "",
          startup: true,
          team: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Derivatives data",
      details: [
        {
          title: "Futures open interest",
          basic: "",
          startup: "",
          team: true,
          enterprise: true,
        },
        {
          title: "Futures funding rate",
          basic: "",
          startup: "",
          team: true,
          enterprise: true,
        },
      ],
    },
    {
      category: "Blockchain data",
      details: [
        {
          title: "Block height",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
        {
          title: "Block time",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
      ],
    },
    {
      category: "Exchange data",
      details: [
        {
          title: "Exchange inflow",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
        {
          title: "Exchange outflow",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
      ],
    },
    {
      category: "Mining data",
      details: [
        {
          title: "Hash rate",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
        {
          title: "Difficulty ribbon",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
      ],
    },
    {
      category: "Technical indicators",
      details: [
        {
          title: "NVT ratio",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
        {
          title: "MVRV ratio",
          basic: "",
          startup: "",
          team: "",
          enterprise: true,
        },
      ],
    },

    // Add more features as needed
  ];