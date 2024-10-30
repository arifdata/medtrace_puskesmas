/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w3nkl7x1o4imwvg",
    "created": "2024-10-28 15:14:10.053Z",
    "updated": "2024-10-28 15:14:10.053Z",
    "name": "buku_penerimaan_gudang",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m8gxyohz",
        "name": "tanggal_terima",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "2j8tywkx",
        "name": "sumber",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "PEMERINTAH",
            "JKN"
          ]
        }
      },
      {
        "system": false,
        "id": "kjcvuued",
        "name": "notes",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "y6ujebwt",
        "name": "scan_berita_acara",
        "type": "file",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "z2ckjf3x",
        "name": "data_penerimaan",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("w3nkl7x1o4imwvg");

  return dao.deleteCollection(collection);
})
