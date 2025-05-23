import type { Data } from './MyTable';


export const mock = [
  {
    "dimension": {
      "device": "Desktop",
      "browser": "Chrome"
    },
    "metrics": [
      {
        "title": "Visits",
        "value": 12345,
        "trend": "+15%"
      },
      {
        "title": "Bounce Rate",
        "value": 0.08,
        "trend": "+15%"
      }
    ]
  },
  {
    "dimension": {
      "device": "Mobile",
      "browser": "Safari"
    },
    "metrics": [
      {
        "title": "Visits",
        "value": 6789,
        "trend": "-5%"
      },
      {
        "title": "Bounce Rate",
        "value": 0.12,
        "trend": "-2%"
      }
    ]
  }
] as Data[];
