/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8ket5g2ni7f1fll",
    "created": "2024-10-28 15:14:10.057Z",
    "updated": "2024-10-28 15:14:10.057Z",
    "name": "unit_puskesmas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5afa8cvp",
        "name": "nama_unit",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ket5g2ni7f1fll");

  return dao.deleteCollection(collection);
})
