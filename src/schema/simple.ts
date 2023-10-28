let jsonStr = `{
  "type": "object",
  "properties": {
    "fr-lbvk": {
      "title": "Step List",
      "description": "This is a step list",
      "type": "array",
      "items": {
        "title": "Step",
        "description": "This is a step",
        "column": 1,
        "type": "object",
        "properties": {
          "fr-ft3a": {
            "title": "Step Name",
            "type": "string",
            "props": {
              "options": [
                {
                  "label": "First Step",
                  "value": "A"
                },
                {
                  "label": "Second Step",
                  "value": "B"
                }
              ],
              "placeholder": "select a step"
            },
            "widget": "select"
          },
          "fr-9i0a": {
            "title": "Sub Step List",
            "description": "This is a sub step list",
            "column": 1,
            "type": "object",
            "widget": "collapse",
            "properties": {
              "fr-j82x": {
                "title": "Sub Step",
                "description": "This is a sub step",
                "type": "array",
                "items": {
                  "title": "Sub Step",
                  "description": "This is a sub step",
                  "column": 1,
                  "type": "object",
                  "properties": {
                    "fr-gdsv": {
                      "title": "Sub Step Name",
                      "type": "string",
                      "props": {
                        "options": [
                          {
                            "label": "First Sub Step",
                            "value": "A"
                          },
                          {
                            "label": "Second Sub Step",
                            "value": "B"
                          }
                        ],
                        "placeholder": "select a sub step"
                      },
                      "widget": "select"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "displayType": "column",
  "maxWidth": "1000px",
  "column": 1
}`;

export default JSON.parse(jsonStr);
