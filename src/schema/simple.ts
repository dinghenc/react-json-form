let jsonStr = `{
  "type": "object",
  "properties": {
    "fr-lbvk": {
      "title": "Step List",
      "type": "array",
      "description": "This is a step list",
      "items": {
        "title": "Step",
        "description": "This is a step",
        "column": 1,
        "type": "object",
        "properties": {
          "fr-ft3a": {
            "title": "Step Name",
            "type": "string",
            "widget": "select",
            "props": {
              "placeholder": "select a step",
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
              "mode": "single"
            }
          },
          "fr-9i0a": {
            "title": "Sub Step List",
            "column": 1,
            "type": "object",
            "description": "This is a sub step list",
            "widget": "collapse",
            "properties": {
              "fr-j82x": {
                "title": "Sub Step",
                "type": "array",
                "description": "This is a sub step",
                "items": {
                  "title": "Sub Step",
                  "description": "This is a sub step",
                  "column": 1,
                  "type": "object",
                  "properties": {
                    "fr-gdsv": {
                      "title": "Sub Step Name",
                      "type": "string",
                      "widget": "select",
                      "props": {
                        "placeholder": "select a sub step",
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
                        "mode": "single"
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
    "fr-5m89": {
      "title": "Input 1",
      "type": "string",
      "widget": "input"
    },
    "fr-dpny": {
      "title": "Input 2",
      "type": "string",
      "widget": "input"
    },
    "fr-7of6": {
      "title": "Input 3",
      "type": "string",
      "widget": "input"
    }
  },
  "displayType": "row",
  "layout": "vertical",
  "maxWidth": "340px"
}`;

export default JSON.parse(jsonStr);
