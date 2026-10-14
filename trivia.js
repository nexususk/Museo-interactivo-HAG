document.addEventListener('DOMContentLoaded', () => {
    // BANCO COMPLETO DE 40 PREGUNTAS CON SUS EXTENSIONES DE ARCHIVO ESPECÍFICAS
    const questionBank = [
        {
            mural: "Resonancias In situ – Brugmansia arborea",
            image: "images/murales/resonancias_in_situ.jpeg",
            question: "¿Qué especie vegetal nativa/botánica representa el artista Axel Void (@axelvoid) en su obra sobria sobre el muro gris de la sede?",
            options: [
                "Una flor de orquídea silvestre",
                "Una rama de Brugmansia arborea (conocida popularmente como borrachero o floripondio)",
                "Una hoja de palma de cera",
                "Un racimo de flores de sementera"
            ],
            correct: 1,
            explanation: "Axel Void representa la Brugmansia arborea, explorando la botánica local y la relación entre la flora silvestre y la estructura urbana."
        },
        {
            mural: "Hilos de libertad: el graffiti como lazo comunitario",
            image: "images/murales/hilos_de_libertad.webp",
            question: "En la obra de Christian Bran Arboleda (@Mr.Shifo), ¿qué elemento central sostiene e integra la composición simbólica de la red comunitaria?",
            options: [
                "Una cadena metálica oxidada",
                "Una mano hiperrealista de la que nacen hilos fucsia que entrelazan los elementos",
                "Un mapa trazado con aerógrafo",
                "Una figura geométrica tridimensional"
            ],
            correct: 1,
            explanation: "La mano hiperrealista sostiene hilos fucsia que actúan como metáfora visual de los lazos afectivos, solidarios y comunitarios del barrio."
        },
        {
            mural: "Dimensiones paralelas: el graffiti como territorio de encuentro",
            image: "images/murales/dimensiones_paralelas.jpeg",
            question: "¿Qué estilo de graffiti urbano aplica Ismael Tabares Zorrilla (@dirtyskillz666 / Chosen) para dar volumen y movimiento a su mural?",
            options: [
                "Esténcil plano y miniatura",
                "Wildstyle tridimensional rico en flechas, conexiones y volumen",
                "Caligrafía tradicional monocromática",
                "Muralismo académico realista"
            ],
            correct: 1,
            explanation: "Chosen utiliza el estilo Wildstyle tridimensional, entrelazando letras complejas y formas geométricas de alto impacto cromático."
        },
        {
            mural: "Santuario de vida: la escuela como refugio y biodiversidad",
            image: "images/murales/santuario_de_vida.jpeg",
            question: "¿Qué especie de la fauna anfibia colombiana destaca en el mural ubicado en el muro de soporte de la rampa/escalera de acceso?",
            options: [
                "Una salamandra café",
                "Una rana venenosa de dardo / rana dorada sobre fondo azul",
                "Un sapo común de caña",
                "Una iguana verde"
            ],
            correct: 1,
            explanation: "La obra anónima representa una rana de colores vivos (amarillo/naranja) que simboliza la riqueza anfibio-biológica y la protección escolar."
        },
        {
            mural: "Bosque de afectos: naturaleza, juego y memoria",
            image: "images/murales/bosque_de_afectos.jpeg",
            question: "¿En qué contexto geográfico y memoria territorial inspiró Daniela Silva Sarmiento (@silda_._) la composición de su mural?",
            options: [
                "En las playas del Pacífico colombiano",
                "En sus vivencias y paisajes rurales en Chía, Cundinamarca",
                "En los llanos orientales",
                "En el centro histórico de Cartagena"
            ],
            correct: 1,
            explanation: "Silda traslada la serenidad, vegetación y formas orgánicas de los entornos rurales de Chía hacia el contexto urbano de la escuela."
        },
        {
            mural: "Manos en encuentro, memoria y diversidad",
            image: "images/murales/manos_en_encuentro.png",
            question: "En la portería principal de la sede San Lorenzo, ¿qué gesto forma la mano que sostiene el libro con la letra \"M\"?",
            options: [
                "El puño cerrado de protesta",
                "Un gesto de lectura, memoria y comunicación incluyente",
                "Una señal de alto o detención",
                "La mano sosteniendo un pincel de pintura"
            ],
            correct: 1,
            explanation: "Carlos Alberto Cueto representa diversas manos que realizan gestos comunitarios, entre ellos sostener el libro de la memoria."
        },
        {
            mural: "Cotejo",
            image: "images/murales/cotejo.webp",
            question: "¿Qué deporte popular urbano utiliza Néstor Iván Arteaga Niño (@arteaga.1) como metáfora del encuentro pedagógico y el trabajo en equipo?",
            options: [
                "Baloncesto de calle",
                "Microfútbol (fútbol de salón)",
                "Béisbol infantil",
                "Atletismo de relevos"
            ],
            correct: 1,
            explanation: "El artista aborda el \"cotejo\" o partido de microfútbol como una herramienta de convivencia, respeto e integración en la infancia."
        },
        {
            mural: "Mil grullas para la esperanza",
            image: "images/murales/mil_grullas.webp",
            question: "¿En qué tradición/leyenda internacional se basan Damián Figueroa y Sored Snid para simbolizar la reconciliación y la paz en su mural panorámico?",
            options: [
                "La leyenda maya del colibrí mensajero",
                "La tradición japonesa de las 1.000 grullas de origami (Senbazuru)",
                "El mito griego de Ícaro",
                "La leyenda nórdica de las aves del destino"
            ],
            correct: 1,
            explanation: "Toma como referente las grullas de papel como símbolo universal de sanación, paz y esperanza para las comunidades que sufren el desarraigo."
        },
        {
            mural: "Manos que nos unen",
            image: "images/murales/manos_que_nos_unen.webp",
            question: "En el mural de Mara Botero (@mara_botero), ¿qué elemento cromático resalta intencionalmente sobre la escala de grises de las manos entrelazadas?",
            options: [
                "Un triángulo verde neón",
                "Un círculo rojo transparente sobre un costado",
                "Una estrella dorada en el centro",
                "Una franja azul horizontal"
            ],
            correct: 1,
            explanation: "El círculo rojo acentúa el corazón, la fuerza afectiva, la memoria y los lazos vitales entre las comunidades."
        },
        {
            mural: "Rostros que migran, historias que permanecen",
            image: "images/murales/rostros_que_migran.webp",
            question: "En la obra de Jorge Cardona (@muerto.cardona), ¿cuántos rostros femeninos se integran en el entramado vegetal y orgánico?",
            options: [
                "Dos rostros",
                "Cuatro rostros",
                "Seis rostros",
                "Ocho rostros"
            ],
            correct: 1,
            explanation: "Cuatro rostros femeninos se entrelazan con ramas, hojas, caracoles e insectos, representando el diálogo multicultural y la adaptación."
        },
        {
            mural: "Cuidar la vida, cuidar al otro",
            image: "images/murales/cuidar_la_vida.webp",
            question: "El mural de Miguel Monsalve (@smop009) conecta directamente con el legado humanista del Dr. Héctor Abad Gómez resumido en:",
            options: [
                "Los diez mandamientos de la salud",
                "Las \"5 Aes\": Afecto, Alimento, Aire, Agua y Acogida",
                "Los tres pilares de la medicina moderna",
                "El código hipocrático de la infancia"
            ],
            correct: 1,
            explanation: "Las \"5 Aes\" de Abad Gómez sintetizan el cuidado integral necesario para que cualquier ser humano crezca en condiciones dignas."
        },
        {
            mural: "A la mesa: memoria y dignidad",
            image: "images/murales/a_la_mesa.webp",
            question: "¿Qué tres objetos cotidianos de la mesa representa Juan David Jiménez (@blanco.co.0) como símbolos de cuidado y cultura?",
            options: [
                "Una jarra, una copa y un cuchillo",
                "Un plato, una cuchara y una taza",
                "Una olla de barro, un molinillo y un delantal",
                "Una cesta de pan, un mantel y un tenedor"
            ],
            correct: 1,
            explanation: "El plato, la cuchara y la taza evocan la soberanía alimentaria, el encuentro cultural y la dignidad del alimento."
        },
        {
            mural: "Travesías de Esperanza",
            image: "images/murales/travesias_de_esperanza.webp",
            question: "¿Quiénes son los autores acreditados de la obra \"Travesías de Esperanza\", que muestra a seis personas navegando en una barca?",
            options: [
                "Artistas internacionales invitados",
                "Estudiantes del programa Jornada Escolar Complementaria",
                "Docentes del área de ciencias sociales",
                "Un colectivo anónimo de grafiteros"
            ],
            correct: 1,
            explanation: "Los propios estudiantes del programa plasmaron sus historias familiares de viaje, migración fluvial y esperanza comunitaria."
        },
        {
            mural: "Homenaje a Luis Felipe Vélez",
            image: "images/murales/homenaje_luis_felipe.png",
            question: "¿A qué líder sindical del magisterio colombiano, asesinado el 25 de agosto de 1987, rinde tributo la obra de Marco Londoño (@marco_lond)?",
            options: [
                "Jaime Garzón",
                "Luis Felipe Vélez Herrera (presidente de ADIDA)",
                "Jorge Eliécer Gaitán",
                "Héctor Abad Faciolince"
            ],
            correct: 1,
            explanation: "El mural rinde homenaje al presidente de ADIDA asesinado en 1987, evento trágicamente vinculado a la muerte de Héctor Abad Gómez."
        },
        {
            mural: "Nidos de acogida y raíces de esperanza",
            image: "images/murales/nidos_de_acogida.jpeg",
            question: "En la obra de Mateo Torrijo Galeano (@torrijo_reyes), ¿qué figura animal aparece en la parte superior construyendo un refugio?",
            options: [
                "Un jaguar cuidando a sus crías",
                "Un pájaro en vuelo llevando una pajita en el pico para hacer su nido",
                "Una mariposa monarca",
                "Una ardilla recolectando semillas"
            ],
            correct: 1,
            explanation: "El ave haciendo su nido es metáfora del esfuerzo de las familias migrantes por reconstruir su hogar tras el desplazamiento."
        },
        {
            mural: "El viaje de la memoria",
            image: "images/murales/el_viaje_de_la_memoria.webp",
            question: "¿Qué medio de transporte actúa como escenario/umbrales de memoria en la obra de Fidel Castro Cabello (@fidelumen)?",
            options: [
                "Un autobús urbano (chiva)",
                "El interior de un tren o vagón con amplias ventanas",
                "Una barca a remos",
                "Un avión comercial"
            ],
            correct: 1,
            explanation: "El tren simula el viaje físico y emocional de las familias en tránsito, con ventanas que conectan con la historia y el paisaje."
        },
        {
            mural: "Libertad, memoria y asombro",
            image: "images/murales/libertad_memoria_asombro.webp",
            question: "¿Qué ave nativa representa Marianela Ramírez (@raye.inc) en el pasillo a la biblioteca y qué forma adopta su cuerpo?",
            options: [
                "Un colibrí con cuerpo de tintero",
                "Un barranquero hembra con cuerpo diseñado en forma de libro",
                "Una guacamaya con cuerpo de pergamino",
                "Un búho con forma de lápiz"
            ],
            correct: 1,
            explanation: "El barranquero-libro combina el vuelo libre con la lectura como herramienta de exploración, conocimiento y autonomía."
        },
        {
            mural: "La infancia que habita el territorio",
            image: "images/murales/la_infancia_que_habita.webp",
            question: "En el paisaje de María Fernanda Tarazona (@maria_tarazona), ¿qué relación se establece entre la infancia y el prado?",
            options: [
                "Los niños están aislados en un aula",
                "Los cuerpos de los niños se integran y funden armónicamente con la naturaleza",
                "Los niños están corriendo asustados",
                "Aparecen representados como estatuas de piedra"
            ],
            correct: 1,
            explanation: "La obra muestra a los niños recostados en el prado, fundiéndose con los verdes y amarillos como metáfora de paz y refugio."
        },
        {
            mural: "Geometrías del Juego: La infancia que reinventa el espacio",
            image: "images/murales/geometrias_del_juego.jpg",
            question: "¿Qué postura corporal adoptan las niñas en el mural de Cris Herrera (@zamuraikiki / @caucho_) desafiando el espacio plano?",
            options: [
                "Aparecen sentadas en pupitres en fila",
                "Aparecen de cabeza, invertidas y suspendidas entrelazándose con flores",
                "Corren de espaldas al espectador",
                "Están recostadas durmiendo"
            ],
            correct: 1,
            explanation: "Las figuras invertidas celebran la libertad corporal, la espontaneidad y la reinvención del juego infantil dentro de la infraestructura escolar."
        },
        {
            mural: "Reflejos del ser: el arte de reconocerse",
            image: "images/murales/reflejos_del_ser.webp",
            question: "En la obra de Florencia Campoo (@mofff.cl), ¿qué encuentro simbólico da origen al rostro reflejado en el espejo?",
            options: [
                "La fusión entre dos profesoras de la sede",
                "La unión y fusión visual entre una estudiante migrante venezolana y la artista",
                "El retrato de una lideresa indígena ancestral",
                "Un personaje abstracto de ficción"
            ],
            correct: 1,
            explanation: "La obra fusiona las miradas de la estudiante migrante y la artista, mostrando el reconocimiento del \"otro\" sin fronteras."
        },
        {
            mural: "Rostros que constituyen territorio",
            image: "images/murales/rostros_que_constituyen.jpeg",
            question: "En el mural de Joan Sebastian Montoya (@donchi.artdimedellin), ¿qué referentes multiculturales conviven en la pared?",
            options: [
                "Personajes exclusivos del Renacimiento europeo",
                "Figuras y referentes de Colombia, Venezuela y el pueblo Emberá",
                "Héroes de cómics norteamericanos",
                "Iconos del deporte asiático"
            ],
            correct: 1,
            explanation: "Donchi integra personalidades y símbolos de la cultura colombiana, venezolana e indígena para celebrar la diversidad escolar."
        },
        {
            mural: "El color de las infancias",
            image: "images/murales/el_color_de_las_infancias.jpeg",
            question: "¿Cómo organiza Luis Fernando (@luis.xertu) a los niños de preescolar en su mural de tonos vibrantes?",
            options: [
                "En un círculo tomados de la mano",
                "En fila posando durante una actividad con sus juguetes/peluches en franjas de color",
                "Subiendo por un autobús escolar",
                "Escondidos detrás de árboles"
            ],
            correct: 1,
            explanation: "Los niños posan en fila con sus objetos de afecto dentro de franjas cromáticas rojas, azules y verdes."
        },
        {
            mural: "Donde las raíces encuentran camino",
            image: "images/murales/donde_las_raices.webp",
            question: "¿De qué países son originarias las artistas Jennifer Karina Díaz (@shetukiltra_murales) y Lizeth Balboa (@balboa.lizeth)?",
            options: [
                "Colombia y Ecuador",
                "Chile y Perú",
                "Argentina y Uruguay",
                "Venezuela y Brasil"
            ],
            correct: 1,
            explanation: "Las artistas (una chilena y una peruana) aportaron sus visiones sobre la infancia andina y el legado ancestral."
        },
        {
            mural: "Florecer en la memoria: la infancia como semilla de vida",
            image: "images/murales/florecer_en_la_memoria.jpg",
            question: "¿Qué cultura indígena sirvió de inspiración directa para los patrones e iconografía del mural de Natalia Gallego (@gleo_co)?",
            options: [
                "Pueblo Wayúu",
                "Pueblo Emberá",
                "Comunidad Muisca",
                "Cultura Kogui"
            ],
            correct: 1,
            explanation: "Gleo incorpora formas y grafismos inspirados en la cosmovisión del Pueblo Emberá en tonos cálidos deslumbrantes."
        },
        {
            mural: "Mosaico de luz: reciclar para incluir",
            image: "images/murales/mosaico_de_luz.jpeg",
            question: "¿Qué material de reciclaje masivo utilizó la comunidad educativa para construir la obra \"Mosaico de luz\"?",
            options: [
                "Latas de aluminio aplastadas",
                "Miles de tapas plásticas de botellas organizadas por color",
                "Azulejos cerámicos partidos",
                "Botellas de vidrio trituradas"
            ],
            correct: 1,
            explanation: "Fue elaborado colaborativamente recolectando y ensamblando miles de tapas plásticas recicladas."
        },
        {
            mural: "La adversidad y la muerte en la cotidianidad de la escuela",
            image: "images/murales/la_adversidad_y_la_muerte.webp",
            question: "En el mural de Jagua Colectivo (@jaguacolectivo), ¿qué objeto afectivo lleva la niña en su maleta como símbolo de refugio y recuerdo materno?",
            options: [
                "Un trompo de madera",
                "Un oso de peluche",
                "Un libro de cuentos",
                "Una muñeca de porcelana"
            ],
            correct: 1,
            explanation: "El oso de peluche actúa como un archivo emocional íntimo que conserva el vínculo con la madre y el consuelo frente a la pérdida."
        },
        {
            mural: "Territorios que habitan la memoria",
            image: "images/murales/territorios_que_habitan.webp",
            question: "¿Quiénes participaron activamente en la creación del mural exuberante de selvas y ríos liderado por Natalia Rendón (@natalia.rendon)?",
            options: [
                "Solamente artistas profesionales internacionales",
                "Niños y niñas indígenas y no indígenas de la institución",
                "Directivos de la secretaría de educación",
                "Exalumnos graduados del siglo pasado"
            ],
            correct: 1,
            explanation: "Fue una co-creación tallerista donde infancias indígenas y no indígenas pintaron sus selvas, ríos y memorias de origen."
        },
        {
            mural: "Fracturas que sanan: rostros de la diversidad y la memoria",
            image: "images/murales/fracturas_que_sanan.webp",
            question: "En el mural co-creado con la Red Antirrumor y Corporación Región, ¿qué elemento en el centro del rostro simboliza los prejuicios y la discriminación?",
            options: [
                "Una venda negra en los ojos",
                "Una profunda fisura o grieta vertical",
                "Un candado sobre la boca",
                "Una mancha de tinta corrida"
            ],
            correct: 1,
            explanation: "La grieta expone visualmente las rupturas y heridas sociales causadas por los rumores, el racismo y la xenofobia."
        },
        {
            mural: "Caminos de vida: refugio y memoria en tránsito",
            image: "images/murales/caminos_de_vida.jpeg",
            question: "En la obra de Jairo Geovany Mena (@yankamanta), ¿qué recurso visual sobre el muro rojo actúa como umbral entre el espacio escolar y el territorio de origen?",
            options: [
                "Un puente de madera colgante",
                "Una ventana pictórica de estilo realista que encuadra la arquitectura",
                "Un arco de triunfo barroco",
                "Una puerta metálica cerrada"
            ],
            correct: 1,
            explanation: "La ventana realista recortada sobre el intenso muro rojo conecta la memoria ancestral con la infraestructura de acogida."
        },
        {
            mural: "MUTAR: Huellas del tránsito y ciclos de vida",
            image: "images/murales/matar.webp",
            question: "En la obra monumental del Señor OK (@senorok) en el patio/exterior, ¿qué palabra clave aparece pintada en el panel central entre flores rojas?",
            options: [
                "FLUIR",
                "MUTAR",
                "SOÑAR",
                "SANAR"
            ],
            correct: 1,
            explanation: "La palabra \"MUTAR\" destaca la capacidad transformadora del ser humano para adaptarse y florecer en nuevos territorios."
        },
        {
            mural: "Raíces: abrazo a la vida y al entorno",
            image: "images/murales/raices.webp",
            question: "En el mural de César Figueroa (@figueroainfinito1), ¿cómo se integra el rostro central con la naturaleza?",
            options: [
                "El rostro lleva una máscara de plástico",
                "El cabello y la piel se prolongan e integran con ramas, follajes, raíces y aves",
                "El rostro está separado por un marco metálico",
                "Está pintado en un lienzo flotante"
            ],
            correct: 1,
            explanation: "El artista integra la figura humana con la vegetación para expresar la interdependencia entre el ser humano y el territorio."
        },
        {
            mural: "El horizonte posible: permanencia y dignidad",
            image: "images/murales/el_horizonte_posible.webp",
            question: "En la obra de Johan Salazar (@johanzalazar), ¿qué logro/símbolo sostiene en sus manos el niño vestido con túnica académica roja?",
            options: [
                "Una antorcha encendida",
                "Un diploma o pergamino intervenido con trazos de colores",
                "Un trofeo deportivo de metal",
                "Una bandera multicolor"
            ],
            correct: 1,
            explanation: "El diploma representa la permanencia escolar, la culminación del proceso educativo y el derecho a un futuro con dignidad."
        },
        {
            mural: "Legado de afecto, cuidado y comunidad",
            image: "images/murales/legado_de_afecto.webp",
            question: "En el mural monumental de Jose Monsalve (@eski.bel), ¿qué figura institucional acompaña a Héctor Abad Gómez y a la niña en la parte superior izquierda?",
            options: [
                "El ministro de educación nacional",
                "El retrato del rector Elkin Osorio Velásquez",
                "El fundador del barrio Niquitao",
                "El alcalde de la ciudad"
            ],
            correct: 1,
            explanation: "Eskibel incorpora al rector Elkin Osorio como símbolo de continuidad institucional del legado abadista en la escuela."
        },
        {
            mural: "Semillas de cuidado: la Principita y la memoria",
            image: "images/murales/semillas_de_cuidado.webp",
            question: "En la obra de Carlos Alberto Cueto (@cuetto026), ¿qué elemento del calzado de la niña simboliza los largos recorridos de la movilidad humana y las madres buscadoras?",
            options: [
                "Unos zapatitos de cristal",
                "Unas botas rojas de hule/caucho",
                "Unas sandalias de cuero",
                "Unos tenis deportivos de neón"
            ],
            correct: 1,
            explanation: "Las botas rojas representan los trayectos rurales de familias desplazadas, caminantes y madres en búsqueda de verdad y justicia."
        },
        {
            mural: "Prohibido prohibir: el despertar de la duda",
            image: "images/murales/prohibido_prohibir.webp",
            question: "¿Qué gesto de la infancia representa Carlos Alberto Cueto (@cuetto026) para simbolizar la curiosidad, el silencio reflexivo y el pensamiento crítico?",
            options: [
                "Una niña gritando hacia el cielo",
                "Una niña en tonos lilas llevando suavemente su dedo hacia los labios",
                "Una niña tapándose los ojos",
                "Una niña escribiendo en un cuaderno"
            ],
            correct: 1,
            explanation: "La pausa reflexiva de la niña invita a cuestionar las certezas dogmáticas y a promover el derecho a la pregunta en la educación."
        },
        {
            mural: "Geografía del alma: el pensamiento vivo de Héctor Abad Gómez",
            image: "images/murales/geografia_del_alma.jpg",
            question: "En la obra monumental de Carlos Alberto Cueto (@cuetto026), ¿dónde sitúa metafóricamente la frase de Abad Gómez los sentimientos, la razón y los odios?",
            options: [
                "La razón en la cabeza, los sentimientos en las manos y los odios en los pies",
                "La razón al centro, los sentimientos al lado del corazón y los odios en la vesícula biliar",
                "La razón en los libros, los sentimientos en las rosas y los odios en el olvido",
                "La razón en la ciencia, los sentimientos en el arte y los odios en la guerra"
            ],
            correct: 1,
            explanation: "La famosa frase de Héctor Abad Gómez propone un equilibrio humano entre el pensamiento racional y la sensibilidad afectiva."
        },
        {
            mural: "Hilos de libertad: el graffiti como lazo comunitario",
            image: "images/murales/hilos_de_libertad.png",
            question: "¿Qué técnica y soporte caracteriza la obra \"Hilos de libertad\" de Mr. Shifo?",
            options: [
                "Mosaico cerámico sobre madera",
                "Graffiti en aerosol y pintura acrílica sobre pared de ladrillo visto",
                "Impresión digital sobre vinilo",
                "Esténcil monocromático sobre estuco"
            ],
            correct: 1,
            explanation: "Mr. Shifo combina pintura acrílica y aerosol, aprovechando la textura de la pared de ladrillo de la infraestructura."
        },
        {
            mural: "Manos que nos unen",
            image: "images/murales/manos_que_nos_unen.webp",
            question: "¿Qué concepto ético unifica el uso del tono gris monocromático en las manos de \"Manos que nos unen\" de Mara Botero?",
            options: [
                "Representa la melancolía del invierno",
                "Trasciende las diferencias visibles reafirmando la igual dignidad y derechos de todos",
                "Simboliza la frialdad de las estructuras de concreto",
                "Muestra la falta de herramientas de color de la artista"
            ],
            correct: 1,
            explanation: "El tono gris unifica las diferencias étnicas o de origen, recordando que todas las personas comparten una misma dignidad fundamental."
        },
        {
            mural: "MUTAR: Huellas del tránsito y ciclos de vida",
            image: "images/murales/matar.webp",
            question: "¿Qué detalle corporal de lenguaje hiperrealista aparece en el extremo izquierdo del mural \"MUTAR\" del Señor OK?",
            options: [
                "Unos pies descalzos cubiertos de barro",
                "Unas manos desgastadas con venas marcadas y pliegues",
                "Un rostro anciano con arrugas profundas",
                "Una espalda sujetando un morral de viaje"
            ],
            correct: 1,
            explanation: "Las manos trabajadas y cansadas representan el esfuerzo, el trabajo, el sostén y la memoria de los migrantes."
        }
    ];

    // LÓGICA DEL MODAL LIGHTBOX
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');

    function openModal(imageSrc, altText) {
        modalImg.src = imageSrc;
        modalImg.alt = altText;
        modal.style.display = 'flex';
    }

    function closeModal() {
        modal.style.display = 'none';
        modalImg.src = '';
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('modal-content-wrapper')) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // MEZCLAR ALEATORIAMENTE OPCIONES DE PREGUNTA
    function shuffleOptions(questionObj) {
        const originalCorrectText = questionObj.options[questionObj.correct];
        const shuffledOptions = [...questionObj.options];

        for (let i = shuffledOptions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
        }

        const newCorrectIndex = shuffledOptions.indexOf(originalCorrectText);

        return {
            ...questionObj,
            options: shuffledOptions,
            correct: newCorrectIndex
        };
    }

    // SELECCIÓN ALEATORIA DE 15 PREGUNTAS
    let questions = [];

    function selectRandomQuestions() {
        const shuffled = [...questionBank];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled.slice(0, 15).map(q => shuffleOptions(q));
    }

    let currentQuestionIndex = 0;
    let score = 0;

    // TEMPORIZADOR Y SONIDOS
    const QUESTION_TIME_LIMIT = 20;
    let timerInterval = null;
    let timeLeft = QUESTION_TIME_LIMIT;

    const timerText = document.getElementById('timer-text');
    const timerBarFill = document.getElementById('timer-bar-fill');
    const sndCorrect = document.getElementById('snd-correct');
    const sndWrong = document.getElementById('snd-wrong');
    const sndTimeout = document.getElementById('snd-timeout');

    // ELEMENTOS DEL DOM
    const startBox = document.getElementById('start-box');
    const timerBox = document.getElementById('timer-box');
    const progressBox = document.getElementById('progress-box');
    const quizCard = document.getElementById('quiz-card');
    const resultsBox = document.getElementById('results-box');
    const questionNumberEl = document.getElementById('question-number');
    const questionTitleEl = document.getElementById('question-title');
    const imageContainer = document.getElementById('image-container');
    const optionsContainer = document.getElementById('options-container');
    const explanationBox = document.getElementById('explanation-box');
    const explanationText = document.getElementById('explanation-text');
    const btnNext = document.getElementById('btn-next');
    const btnStart = document.getElementById('btn-start');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const niquiText = document.getElementById('niqui-text');
    const scoreNumber = document.getElementById('score-number');
    const scoreTotal = document.getElementById('score-total');

    btnStart.addEventListener('click', startQuiz);
    document.getElementById('btn-restart-header').addEventListener('click', restartQuiz);
    document.getElementById('btn-restart-main').addEventListener('click', restartQuiz);
    btnNext.addEventListener('click', nextQuestion);

    function startQuiz() {
        startBox.style.display = 'none';
        timerBox.style.display = 'flex';
        progressBox.style.display = 'flex';
        quizCard.style.display = 'block';
        resultsBox.style.display = 'none';

        currentQuestionIndex = 0;
        score = 0;
        questions = selectRandomQuestions();
        loadQuestion();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timeLeft = QUESTION_TIME_LIMIT;
        timerText.textContent = timeLeft;
        timerBarFill.style.width = '100%';
        timerBarFill.style.backgroundColor = '#2563eb';

        timerInterval = setInterval(() => {
            timeLeft--;
            timerText.textContent = timeLeft;
            
            const percentage = (timeLeft / QUESTION_TIME_LIMIT) * 100;
            timerBarFill.style.width = `${percentage}%`;

            if (timeLeft <= 5) {
                timerBarFill.style.backgroundColor = '#ef4444';
            }

            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeout();
            }
        }, 1000);
    }

    function handleTimeout() {
        if (sndTimeout) {
            sndTimeout.currentTime = 0;
            sndTimeout.play().catch(() => {});
        }
        const q = questions[currentQuestionIndex];
        const allButtons = optionsContainer.querySelectorAll('.option-btn');
        
        allButtons.forEach(btn => btn.classList.add('disabled'));
        if (allButtons[q.correct]) {
            allButtons[q.correct].classList.add('correct');
        }

        niquiText.textContent = "¡Se agotó el tiempo! Revisa la respuesta correcta para la próxima.";
        explanationText.textContent = q.explanation;
        explanationBox.style.display = 'block';

        if (currentQuestionIndex === questions.length - 1) {
            btnNext.textContent = "Ver Resultados";
        } else {
            btnNext.textContent = "Siguiente Pregunta";
        }
        btnNext.style.display = 'inline-block';
    }

    function loadQuestion() {
        const q = questions[currentQuestionIndex];
        
        const progressPercent = (currentQuestionIndex / questions.length) * 100;
        progressFill.style.width = `${progressPercent}%`;
        progressText.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;

        questionNumberEl.textContent = `Pregunta ${currentQuestionIndex + 1} (${q.mural})`;
        questionTitleEl.textContent = q.question;

        // Cargar imagen
        imageContainer.innerHTML = '';
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'question-image-wrapper';
        imageWrapper.innerHTML = `
            <img src="${q.image}" alt="${q.mural}" class="question-image" onerror="this.src='https://via.placeholder.com/600x300?text=Mural+sin+imagen'">
        `;
        
        imageWrapper.addEventListener('click', () => {
            openModal(q.image, q.mural);
        });

        imageContainer.appendChild(imageWrapper);

        // Opciones de respuesta
        optionsContainer.innerHTML = '';
        explanationBox.style.display = 'none';
        btnNext.style.display = 'none';

        niquiText.textContent = "Observa la imagen del mural (haz clic para ampliar) y selecciona la opción correcta.";

        const prefixes = ['▲', '◆', '●', '■'];
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-prefix">${prefixes[index]}</span>
                <span>${opt}</span>
            `;
            btn.addEventListener('click', () => selectOption(index, btn));
            optionsContainer.appendChild(btn);
        });

        startTimer();
    }

    function selectOption(selectedIndex, selectedBtn) {
        clearInterval(timerInterval);

        const q = questions[currentQuestionIndex];
        const allButtons = optionsContainer.querySelectorAll('.option-btn');

        allButtons.forEach(btn => btn.classList.add('disabled'));

        if (selectedIndex === q.correct) {
            selectedBtn.classList.add('correct');
            if (sndCorrect) {
                sndCorrect.currentTime = 0;
                sndCorrect.play().catch(() => {});
            }
            score++;
            niquiText.textContent = "¡Respuesta correcta! Un fragmento más del mural ha sido restaurado.";
        } else {
            selectedBtn.classList.add('wrong');
            if (allButtons[q.correct]) {
                allButtons[q.correct].classList.add('correct');
            }
            if (sndWrong) {
                sndWrong.currentTime = 0;
                sndWrong.play().catch(() => {});
            }
            niquiText.textContent = "¡Casi! Revisa la explicación de este mural para aprender más.";
        }

        explanationText.textContent = q.explanation;
        explanationBox.style.display = 'block';
        
        if (currentQuestionIndex === questions.length - 1) {
            btnNext.textContent = "Ver Resultados";
        } else {
            btnNext.textContent = "Siguiente Pregunta";
        }
        btnNext.style.display = 'inline-block';
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        clearInterval(timerInterval);
        progressFill.style.width = '100%';
        timerBox.style.display = 'none';
        progressBox.style.display = 'none';
        quizCard.style.display = 'none';
        resultsBox.style.display = 'block';
        
        scoreNumber.textContent = score;
        scoreTotal.textContent = `de ${questions.length}`;

        if (score === questions.length) {
            niquiText.textContent = "¡Perfecto! Has restaurado el patrimonio del colegio por completo.";
        } else if (score >= 10) {
            niquiText.textContent = "¡Excelente desempeño! Demostraste un gran conocimiento del museo escolar.";
        } else {
            niquiText.textContent = "¡Buen intento! Te invitamos a recorrer los muros nuevamente para mejorar tu puntaje.";
        }
    }

    function restartQuiz() {
        clearInterval(timerInterval);
        startQuiz();
    }
});