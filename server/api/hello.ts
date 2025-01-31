export default defineEventHandler((event) => {
  return fetch('https://dummyjson.com/c/5f7e-9dbd-4cb9-a465')
    .then((response) => response.json())
    .then((data) => {
      return { data, error: null, pending: false }
    })
    .catch((error) => {
      return { data: null, error, pending: false }
    })
}) 

/* {"data": [
    {
        "id": 1,
        "title": "OBTENÉ LOS NUEVOS STICKERS",
        "description": "Disfruta de stickers sobre maquillaje que te permite favorecer la identidad de tu marca.",
        "images":  [
          "img/stickers00.png",
          "img/stickers01.png"
  ]
    },
    {
        "id": 2,
        "title": "CAPTURA A TUS CLIENTES",
        "subtitle": "Stickers en redes sociales",
        "description": ["Transmiten emociones y cercanía",
      "Refuerzan la comunicación",
      "Favorece el engagement",
      "Potencian la identidad de tu marca"
  ],
        "images": ["img/stickers02.png"]
},
{
      "id": 3,
      "title": "LOS MEJORES FILTROS EN REDES SOCIALES",
      "description": "Cientos de Influencers y marcas de maquillaje utilizan los filtros para ofrecer mejor contenido a sus seguidores ya que les permite conectar mejor con su audiencia.",
      "images": ["img/stickers03.png",
        "img/stickers04.png" ]
},
{
    "id": 4,
    "title": "COMUNICA MEJOR",
    "description": ["Logran diversidad en tus stories, posts.",
  "Incrementan el número de vistas y comentarios que reciben tus publicaciones."
],
    "images": ["img/stickers05.png",
  "img/stickers06.png"
 ]
},
{
  "id": 5,
  "title": "¿POR QUÉ NUESTRO SERVICIO?",
  "description": ["Conectamos con el usuario desde el punto de vista más emocional, cubriendo sus necesidades e intereses a través del contenido.",
"Tenemos la experiencia y el conocimiento para identificar las soluciones tecnológicas adecuadas para cada cliente y cada proyecto."
]
}
] } */