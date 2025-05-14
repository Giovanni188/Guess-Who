# Team: "Group Name"

## Members
- s338059 BETTELLI ALEX
- s338884 ILACQUA GIOVANNI MARIA
- s338520 BENEVENTO MATTIA

## Lab Journal

### Selected Exercise: "GUESS WHO?"

### __List all match__

URL: `/api/matches`

HTTP Method: GET.

Description: Return of match.

Request body: No
```
A short example, if any
```

Response: `200 OK` (success) or `500 Internal server error` (generic error).
Returns an array of match in Json format (see below).

Response body: 
```
[
    {
        "IDMatch": 1,
        "IDPlayer": "1",
        "IDDifficulty": "2",
        "Score": 25,
        "Date": "2025-02-07",
        "Secret_item": "LAUTARO",
        "N_guess": "10"
    },
    ...
]
A short example, if any
```
### __Get a single match given its IDPlayer and date__

URL: `/api/matches/<id>`

HTTP Method: GET.

Description: Retrieve the match represented by `<IDMatch>`.

Request body: No
```
A short example, if any
```

Response: `200 OK` (success), `404 Not Found` (wrong id) or `500 Internal server error` (generic error).

Response body: 
```
{
    "IDMatch": 1,
    "IDPlayer": "1",
    "IDDifficulty": "2",
    "Score": 25,
    "Date": "2025-02-07",
    "Secret_item": "LAUTARO",
    "N_guess": "10",
},
A short example, if any
```

### __Get a single match given its id__

URL: `/api/matches/<IDMatch>`

HTTP Method: GET.

Description: Retrieve the match represented by `<IDMatch>`.

Request body: No
```
A short example, if any
```

Response: `200 OK` (success), `404 Not Found` (wrong id) or `500 Internal server error` (generic error).

Response body: 
```
{
    "IDMatch": 1,
    "IDPlayer": "1",
    "IDDifficulty": "2",
    "Score": 25,
    "Date": "2025-02-07",
    "Secret_item": "LAUTARO",
    "N_guess": "10",
},
A short example, if any
```

### __Create a new match__

URL: `/api/matches`

HTTP Method: POST.

Description: Create a new matches (identified by `<IDMatch>`)

Request body: Yes
```
A short example, if any
```
{
    "IDPlayer": "1",
    "IDDifficulty": "2",
    "Score": 25,
    "Date": "2025-02-07",
    "Secret_item": "LAUTARO",
    "N_guess": "10",
},

Response: `201 Created` (success) or `500 Internal server error` (generic error).


Response body: 
```
A short example, if any
```

### __Update the score of a match__

URL: `/api/matches/<id>/score`

HTTP Method: PUT.

Description: Edit the score of a match (identified by `<IDMatch>`)

Request body: Yes
```
A short example, if any
```
{
    "Score": 30,
}

Response: `204 No Content` (success) or `503 Service Unavailable` (generic error).


Response body: 
```
A short example, if any
```

### __Delete a match__

URL: `/api/matches/<id>`

HTTP Method: DELETE.

Description: Delete a match (identified by `<IDMatch>`)

Request body: No
```
A short example, if any
```

Response: `204 No Content` (success), `404 Not Found` (wrong id) or `500 Internal server error` (generic error).

Response body: 
```
{
    "IDMatch": 1,
    "IDPlayer": "1",
    "IDDifficulty": "2",
    "Score": 25,
    "Date": "2025-02-07",
    "Secret_item": "LAUTARO",
    "N_guess": "10",
},

A short example, if any
```