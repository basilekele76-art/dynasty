/* ========================================
   DYNASTY - FINAL COMPLETE SCRIPT
   ALL ORIGINAL POEMS PRESERVED
   SUPABASE GLOBAL VIEWS + COMMENTS
======================================== */


/* ========================================
   1. TRANSLATIONS
======================================== */

const translations = {

    en: {
        tagline: "A world that follows you.",
        home: "Home",
        settings: "Settings",
        library: "Library",
        share: "Share",
        language: "Language",

        welcome: "WELCOME TO",
        homeTagline: "A world that follows you.",
        homeDescription:
            "Welcome to a colourful world built around imagination, interaction and words. Move, explore and discover.",
        enterLibrary: "Enter Library",
        customize: "Customize",
        allInOne: "ALL IN ONE DYNASTY",

        settingsLabel: "PERSONALIZE",
        settingsTitle: "Settings",
        settingsDescription:
            "Make Dynasty feel like your own world.",
        themeTitle: "Theme",
        themeDescription:
            "Choose how Dynasty looks.",
        dark: "Dark",
        light: "Light",
        backgroundTitle: "Background",
        backgroundDescription:
            "Choose a background style.",
        dots: "Dots",
        grid: "Grid",
        plain: "Plain",

        libraryLabel: "THE ARCHIVE",
        libraryTitle: "Library",
        libraryDescription:
            "Every piece is a world of its own.",
        backLibrary: "Back to Library",
        poemLabel: "DYNASTY LIBRARY",

        shareLabel: "SPREAD THE WORLD",
        shareTitle: "Share Dynasty",
        shareDescription:
            "Let someone else discover your world.",
        shareCardTitle: "Share this experience",
        shareCardDescription:
            "Copy the link and send Dynasty to someone.",
        copyLink: "Copy Link",

        languageLabel: "YOUR LANGUAGE",
        languageTitle: "Choose a Language",
        languageDescription:
            "Change the language of the entire Dynasty experience.",

        commentsTitle: "Comments",
        commentName: "Your name",
        commentPlaceholder: "Write a comment...",
        commentButton: "Post Comment",
        liked: "Liked",
        like: "Like",

        views: "views",
        comments: "comments",

        noComments:
            "No comments yet. Be the first.",
        loadingComments:
            "Loading comments...",
        commentError:
            "Failed to load comments",
        fillComments:
            "Please fill both fields",
        copied: "Copied!",
        poemLinkCopied:
            "Poem link copied!"
    },


    fr: {
        tagline: "Un monde qui vous suit.",
        home: "Accueil",
        settings: "Paramètres",
        library: "Bibliothèque",
        share: "Partager",
        language: "Langue",

        welcome: "BIENVENUE À",
        homeTagline: "Un monde qui vous suit.",
        homeDescription:
            "Bienvenue dans un monde coloré construit autour de l'imagination, de l'interaction et des mots. Bougez, explorez et découvrez.",
        enterLibrary:
            "Entrer dans la bibliothèque",
        customize: "Personnaliser",
        allInOne:
            "TOUT DANS UNE DYNASTIE",

        settingsLabel: "PERSONNALISER",
        settingsTitle: "Paramètres",
        settingsDescription:
            "Faites de Dynasty votre propre monde.",
        themeTitle: "Thème",
        themeDescription:
            "Choisissez l'apparence de Dynasty.",
        dark: "Sombre",
        light: "Clair",
        backgroundTitle: "Arrière-plan",
        backgroundDescription:
            "Choisissez un style d'arrière-plan.",
        dots: "Points",
        grid: "Grille",
        plain: "Simple",

        libraryLabel: "LES ARCHIVES",
        libraryTitle: "Bibliothèque",
        libraryDescription:
            "Chaque poème est un monde à lui seul.",
        backLibrary:
            "Retour à la bibliothèque",
        poemLabel:
            "BIBLIOTHÈQUE DYNASTY",

        shareLabel:
            "PARTAGER LE MONDE",
        shareTitle:
            "Partager Dynasty",
        shareDescription:
            "Laissez quelqu'un d'autre découvrir votre monde.",
        shareCardTitle:
            "Partager cette expérience",
        shareCardDescription:
            "Copiez le lien et envoyez Dynasty à quelqu'un.",
        copyLink:
            "Copier le lien",

        languageLabel:
            "VOTRE LANGUE",
        languageTitle:
            "Choisissez une langue",
        languageDescription:
            "Changez la langue de toute l'expérience Dynasty.",

        commentsTitle:
            "Commentaires",
        commentName:
            "Votre nom",
        commentPlaceholder:
            "Écrivez un commentaire...",
        commentButton:
            "Publier le commentaire",
        liked:
            "Aimé",
        like:
            "J'aime",

        views:
            "vues",
        comments:
            "commentaires",

        noComments:
            "Aucun commentaire pour le moment. Soyez le premier.",
        loadingComments:
            "Chargement des commentaires...",
        commentError:
            "Échec du chargement des commentaires",
        fillComments:
            "Veuillez remplir les deux champs",
        copied:
            "Copié !",
        poemLinkCopied:
            "Lien du poème copié !"
    },


    es: {
        tagline:
            "Un mundo que te sigue.",
        home:
            "Inicio",
        settings:
            "Configuración",
        library:
            "Biblioteca",
        share:
            "Compartir",
        language:
            "Idioma",

        welcome:
            "BIENVENIDO A",
        homeTagline:
            "Un mundo que te sigue.",
        homeDescription:
            "Bienvenido a un mundo colorido construido alrededor de la imaginación, la interacción y las palabras. Muévete, explora y descubre.",
        enterLibrary:
            "Entrar a la biblioteca",
        customize:
            "Personalizar",
        allInOne:
            "TODO EN UNA DINASTÍA",

        settingsLabel:
            "PERSONALIZAR",
        settingsTitle:
            "Configuración",
        settingsDescription:
            "Haz que Dynasty se sienta como tu propio mundo.",
        themeTitle:
            "Tema",
        themeDescription:
            "Elige cómo se ve Dynasty.",
        dark:
            "Oscuro",
        light:
            "Claro",
        backgroundTitle:
            "Fondo",
        backgroundDescription:
            "Elige un estilo de fondo.",
        dots:
            "Puntos",
        grid:
            "Cuadrícula",
        plain:
            "Simple",

        libraryLabel:
            "EL ARCHIVO",
        libraryTitle:
            "Biblioteca",
        libraryDescription:
            "Cada pieza es un mundo en sí misma.",
        backLibrary:
            "Volver a la biblioteca",
        poemLabel:
            "BIBLIOTECA DYNASTY",

        shareLabel:
            "COMPARTE EL MUNDO",
        shareTitle:
            "Compartir Dynasty",
        shareDescription:
            "Deja que alguien más descubra tu mundo.",
        shareCardTitle:
            "Comparte esta experiencia",
        shareCardDescription:
            "Copia el enlace y envía Dynasty a alguien.",
        copyLink:
            "Copiar enlace",

        languageLabel:
            "TU IDIOMA",
        languageTitle:
            "Elige un idioma",
        languageDescription:
            "Cambia el idioma de toda la experiencia Dynasty.",

        commentsTitle:
            "Comentarios",
        commentName:
            "Tu nombre",
        commentPlaceholder:
            "Escribe un comentario...",
        commentButton:
            "Publicar comentario",
        liked:
            "Te gusta",
        like:
            "Me gusta",

        views:
            "vistas",
        comments:
            "comentarios",

        noComments:
            "Aún no hay comentarios. Sé el primero.",
        loadingComments:
            "Cargando comentarios...",
        commentError:
            "No se pudieron cargar los comentarios",
        fillComments:
            "Por favor, completa ambos campos",
        copied:
            "¡Copiado!",
        poemLinkCopied:
            "¡Enlace del poema copiado!"
    },


    nl: {
        tagline:
            "Een wereld die je volgt.",
        home:
            "Home",
        settings:
            "Instellingen",
        library:
            "Bibliotheek",
        share:
            "Delen",
        language:
            "Taal",

        welcome:
            "WELKOM BIJ",
        homeTagline:
            "Een wereld die je volgt.",
        homeDescription:
            "Welkom in een kleurrijke wereld vol verbeelding, interactie en woorden. Beweeg, ontdek en verken.",
        enterLibrary:
            "Bibliotheek openen",
        customize:
            "Aanpassen",
        allInOne:
            "ALLES IN ÉÉN DYNASTIE",

        settingsLabel:
            "PERSONALISEREN",
        settingsTitle:
            "Instellingen",
        settingsDescription:
            "Maak van Dynasty jouw eigen wereld.",
        themeTitle:
            "Thema",
        themeDescription:
            "Kies hoe Dynasty eruitziet.",
        dark:
            "Donker",
        light:
            "Licht",
        backgroundTitle:
            "Achtergrond",
        backgroundDescription:
            "Kies een achtergrondstijl.",
        dots:
            "Punten",
        grid:
            "Raster",
        plain:
            "Eenvoudig",

        libraryLabel:
            "HET ARCHIEF",
        libraryTitle:
            "Poëziebibliotheek",
        libraryDescription:
            "Elk stuk is een wereld op zich.",
        backLibrary:
            "Terug naar bibliotheek",
        poemLabel:
            "DYNASTY BIBLIOTHEEK",

        shareLabel:
            "DEEL DE WERELD",
        shareTitle:
            "Dynasty delen",
        shareDescription:
            "Laat iemand anders jouw wereld ontdekken.",
        shareCardTitle:
            "Deel deze ervaring",
        shareCardDescription:
            "Kopieer de link en stuur Dynasty naar iemand.",
        copyLink:
            "Link kopiëren",

        languageLabel:
            "JOUW TAAL",
        languageTitle:
            "Kies een taal",
        languageDescription:
            "Verander de taal van de volledige Dynasty-ervaring.",

        commentsTitle:
            "Reacties",
        commentName:
            "Je naam",
        commentPlaceholder:
            "Schrijf een reactie...",
        commentButton:
            "Reactie plaatsen",
        liked:
            "Vind ik leuk",
        like:
            "Vind ik leuk",

        views:
            "weergaven",
        comments:
            "reacties",

        noComments:
            "Nog geen reacties. Wees de eerste.",
        loadingComments:
            "Reacties laden...",
        commentError:
            "Reacties konden niet worden geladen",
        fillComments:
            "Vul beide velden in",
        copied:
            "Gekopieerd!",
        poemLinkCopied:
            "Poëzielink gekopieerd!"
    }

};


/* ========================================
   2. YOUR POEMS
   ORIGINAL TEXTS PRESERVED
======================================== */

const poems = [

    {
        title: "Million Feelings, Zero Words",

        text: `Million feeling, zero words

Million wars, zero swords

In the reality of my own heart I'm truly lost

Just stuck between what's love and what's lust

Million feelings, zero words,
that point when you feel so vulnerable,
that point when even the loudest boy can't use his voice,
that point where even the social girl turns numb,
then they begin to search for words.

This is the weakness I have felt the most over my years.`
    },


    {
        title: "Blue on Blue",

        text: `BLUE ON BLUE

The bird of the air
stole my heart unaware
Thus my heart skips a beat and that's farewell
A glimpse of misery and I began to long
The chips of the hummingbird sound like a song

A blue ocean can't see the blue skies
Can I meet the bird or I tell myself lies?
I leap with each dawn, scales torn by the sun,
To taste one cold feather before I am gone.

He wheels up in glory, my death has begun,
For hunters don't hear what the hunted calls fun.
She swims in circles, dreaming of his wing,
A shadow etched on water's restless skin.

He knew not of the hymns she used to sing
To air that held the god she died to win.
He knows only hunger, I know only prayer.
My fins write his name on the waves I can't share.

One kiss from his beak and none would compare
The price of ascension is flesh in the air,
He dove at last not love! but a need to eat.
Her gasp was prayer. His beak was her reply.

The water blushed with red, thy eyes could see
For dreams that dared to trespass the seas.
So tell me, blue sky do you mourn what you take,
Or crown every longing you lure to its grave?

And I leave thee with this
Cold and warm separates the air and the sea,
For a fish that loves flight must learn far too soon
Some dreams are just coffins disguised as the moon.
.`
    },


    {
        title: "Angels on Earth",

        text: `ANGELS ON EARTH

Beautiful creatures
Beating all limitations
Angels on earth,
Thus made from shackels
Thus made from dust

The world is bounded through thy strings
Thy birth increase thy sufferings
The pain inflicted by the ones you so cared of
The weight of the world heavy tonight
But your words makes them seem light

Thus nothing with out you but something with out thee
I wonder I wonder alas if I should flee
The opening I came out through would you let Me leave through
Thy angel on earth

Thy on shaking love
All thy problems through thee I solve
Your eyes speak to me I could hear thy heart screening timber of hope
Thus I won't fail we are connected with a rope

Happy international women's day
🫴🥺
.`
    },


    {
        title: "The World Beyond",

        text: `THE WORLD BEYOND

The world beyond where emotions trail,
a place so deep that even my very words fail.
It grips my chest, it steals control,
and drags me back through versions of old.

I lift my head to cross that line,
where thoughts collapse and truths align.
My energy falls, begins to crumble,
while buried feelings wake and rumble.

Here, silence speaks no need to complain,
no noise, no chaos, no shallow pain.
Just stillness stretched across the air,
and just me feeling like William Shakespeare.

Eyes closed yet I finally see,
a world that lives inside of me.
A fragile beauty, calm yet wild,
like distant dreams I once exiled.

I breathe it in, slow and deep,
but something there refuses to sleep.
It watches me, yet it doesn't feel,
like it knows the truth I try to conceal.

“My boy,” my grandfather once said,
“The world is small.”
now he rests, long dead.
But here beyond, he stands so clear,
alive in ways we don't see here.

For no one dies at least not there,
just shifts to something unaware.
And I alone seem cursed to know
the weight of what I can't even let go.

Each second spent on that other side
reveals the paths I chose to hide.
Temptation calls within my mind,
while my heart stays cold restrained, confined.

The world beyond both dark and bright,
a haunting calm, a silent fight.
A hell disguised in heaven's art,
You can just call it thy hell paradise

A place that slowly shapes my heart.
The world beyond… it made me see,
the poet buried deep inside of me.
.`
    },


    {
        title: "Vinland Saga",

        text: `VINLAND SAGA

I always wished to wander the world,
A little dream then took form with a sword.
Now I follow a path carved by revenge,
Sleeping beside the man I long to avenge.

They say that strength is all that remains,
The price of peace, the language of pain.
You claim that shining coins are gold,
But what are riches when the heart grows cold?

Can silver truly purchase peace?
Or do our wars simply never cease?
A single farmer owns many lands,
Yet cannot protect it by his hands.

Mighty as Askeladd, driven by one woman's name,
Still every victory burns with the same old flame.
Yet somewhere beyond the blood and the sand,
I still dream of building my own Vinland.

Perhaps beside a girl from distant Milan,
Where beauty meets the soul instead of the hand.
No throne to conquer, no crown to command
Only a home where no swords demand.

So at the very end of many wars
And the sheeting of the sword of many draws
A true warrior doesn't need a sword
Trof once told me so, but only true warriors could understand those words.
.`
    },


    {
        title: "Survival for the Stories We Carry",

        text: `SURVIVAL FOR THE STORIES WE CARRY

I board the bus with prayers in my pocket,
tucked my hands on my mother's locket,
Emerging shadows, so fast with no signs.
No chants, just Gunshots clapping dark.
Loud enough to make to make the strongest men crack.
As Mothers count beads so fast and wild,
Each “Hail Mary” a fence around a child.

Survival for the stories we carry;
My first sight was borne on a body still Mr. Henry,
Slowly slowly mother and child no where to be found.
Another South man, a South South seed.
A break for a run as I choose not to sink.

Gunshots loud as craving wild beast,
Every now and then I hail prayers to make the streets.
Tracking my steps lost in the shadows,
Waking alone in the market of a new tomorrow.

Monday market, half full, Stalls like dead bulls.
Blowing winds with the stories we carry;
Shared pain with the women we marry.
I listen as they whisper prices, So fast,
Cause loud voices attract loud guns,
Alas they stay quiet, and wait for their turns.

My country is a house with many doors,
From Port Harcourt rainfall to Maiduguri dust.
And every door holds our stories, Carried on our backs to fulfill glories.
The highways hum a breathless tune,
Gunshots arrive as the night comes too soon,
Prayers whispered through gritted teeth,
Loud, and sudden, leaving bodies on folded sheets.

Farmers plant with eyes on the soil,
As the new revolution of the falling Troy.
Schools are empty chairs adrift on a sea—
But look at my country and tell me what you see?
Indeed a falling nation, holding its breath.
Torchlights in hands, hopes in thy mouth,
On sacred scriptures on what we believe—
Naija! the home of the strong, but minds are weak.

Days go by and insecurity takes a new cap,
Bandit, herder, and still from your blessings they tap.
Alas! The Giant of Africa still answers its name,
And staying still left with a government insane.
Journey was a thrill, the stories of hide and seek;
At least the West I find my rest,
No more hiding but many more findings.

Lagos indeed a beautiful hell, Building so nice but people don't dwell,
Benin sculptures lined and pretty,
But they choose heads for every seating.
A journey of eyes witnessing a story of hearts,
From the desert cattle to the oil land,
As once again my foot on Port Harcourt sand.
.`
    },


    {
        title: "Still Yours",

        text: `STILL YOURS

A gentle beat, That makes my very heart skip
Humming alike tunes still yours
Different rhythms, but only yours feels true
Stuck in memories of the old, I can't create anew

Love dies and time flies,
But In the beauty of my mind, only thee I find
Just the thoughts of you keeps me still
Alas, the script that just feels so real
And that gentle breeze only you could make me feel

Closer to my ears, I can hear thy name
Now I feel the weight, I'm running insane
I left without looking back
Now I see the tears of a painful heart.

Loving blindly, Now I open my eyes
Boiling inside and my heart now fried
Am still yours, Just like binding laws
And I can't let go even when thy watch says stop

A race without an end I made this track
I can't just tell what the other hearts lack
Memories yes only your memories makes me smile
I want you back so I could end this race of a thousand miles

Now i close my eyes and it turns to a dream
Tears flowing like it could fill a stream
Now I'm stuck and lost, thus love is a must
I'm stuck in your world, free me from thy curse
Oh! Even in freedom my soul is still yours
.`
    },


    {
        title: "Dear Ex",

        text: `DEAR EX

        Thus thy back and forth got me lost in a phaze,
caught in your silence, I'm counting the days,
loving you loud but you moving in haze,
now I'm the one that's just stuck in your gaze.

You’re part of my very soul, not just someone I knew,
how then can I act like I'm done with you?
Alas! distance seems louder than all that we say,
and love is just fading in quiet decay.

I tried to hold on, I bent and I grew,
Choosing your very choices, I listened to you,
but now is thy fetch, it’s feels like nothing gets through,

so tell me, Dear… what more can I do?
I speak how I feel and you still do the same,
then call it “overthinking” to dodge all the blame,
but thoughts don’t just come when there’s nothing to see,
they grow from the things that you show me to be.

I’ve never gone this hard, I’ve never been this real,
no games, no intentions, just truth in how I feel,
not chasing your body, not chasing a thrill,
just loving you deeply, against my very own will.

Now my heart is like a burden, like a door in thy way,
like my every text is like a sigh at the end of the day,
a nuisance, a “maybe,” a pause in your flow,
while someone else gets the side you don’t show.

Sometimes I wonder if I’m just the spare,
the one that you keep but don’t fully care,
the one you can lose and still be okay,
while I’d lose myself if you walk away.

Still… I love you, that part never bends,
even when loving you cuts me in ends,
but chasing after a prey for too long hurts the lions pride,
Thus I’m losing myself just to stay by your side.

So I’ll match your every game, mirror your pace,
no more overgiving just to earn my place,
no more double cries, no more chasing replies,
Can't go on my knees as time slowly flies.
If I fade into silence, if I let this go,
just know I gave more than you’ll ever know,
and even in distance, one truth remains
You stole my heart and turned my head insane.
.`
    },


    {
        title: "Cost of Loving You",

        text: `COST OF LOVING YOU

I gave until giving
started feeling like disappearing.

I carried what was never mine
and called it love.

But love should never require
one person to become empty
so another can feel full.`
    },


    {
        title: "Mon Ami, It's Better With You",

        text: `MON AMI, IT'S BETTER WITH YOU

Mon ami,
some roads feel lighter
when another soul walks beside you.

Some days carry rain,
some nights carry pain,

but friendship can make
even the longest road
feel a little less alone.`
    },


    {
        title: "Many Are Mad",

        text: `Many are mad,
but few wear the scars.

Some hide their storms
behind smiles and stars.

Some laugh too loud
just to silence the pain,

while others call chaos
a beautiful name.`
    },


    {
        title: "Life Isn't a Bed of Roses",

        text: `LIFE ISN'T A BED OF ROSES

Life isn't a bed of roses.

Some flowers grow
where nobody thought they could.

Some roads hurt your feet
before they lead you home.

And sometimes,
survival itself
is the victory.`
    }

];


/* ========================================
   3. PAGE NAVIGATION
======================================== */

const pages =
    document.querySelectorAll(".page");

const navButtons =
    document.querySelectorAll(".nav-btn");

const pageButtons =
    document.querySelectorAll("[data-page]");


function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById(pageName);

    if (!selectedPage) {
        console.warn(
            `Dynasty: page "${pageName}" was not found.`
        );
        return;
    }

    selectedPage.classList.add("active");

    navButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.dataset.page ===
            pageName
        ) {
            button.classList.add("active");
        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


pageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const page =
                button.dataset.page;

            if (page) {
                showPage(page);
            }

        }
    );

});


/* ========================================
   4. POETRY LIBRARY
======================================== */

const poetryList =
    document.getElementById("poemList");


function createPoetryLibrary() {

    if (!poetryList) {
        console.warn(
            "Dynasty: #poemList was not found."
        );
        return;
    }

    poetryList.innerHTML = "";

    poems.forEach((poem, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "poem-title-btn";

        const number =
            document.createElement("span");

        number.className =
            "poem-number";

        number.textContent =
            String(index + 1)
                .padStart(2, "0");


        const title =
            document.createElement("span");

        title.textContent =
            poem.title;


        const left =
            document.createElement("span");

        left.appendChild(number);
        left.appendChild(title);


        const arrow =
            document.createElement("i");

        arrow.className =
            "fa-solid fa-arrow-right";


        button.appendChild(left);
        button.appendChild(arrow);


        button.addEventListener(
            "click",
            () => {
                openPoem(index);
            }
        );


        poetryList.appendChild(button);

    });

}


createPoetryLibrary();


/* ========================================
   5. SUPABASE
======================================== */

const SUPABASE_URL =
    "https://kgpqfvzqrsufioumnlmq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_hDjmXgHr006EA08mk-mjaA_H80kVaAI";


const supabaseHeaders = {

    "apikey":
        SUPABASE_KEY,

    "Authorization":
        `Bearer ${SUPABASE_KEY}`,

    "Content-Type":
        "application/json"

};


/* ========================================
   6. POEM READER
======================================== */

const poemTitle =
    document.getElementById("poemTitle");

const poemText =
    document.getElementById("poemText");

const backToLibrary =
    document.getElementById("backToLibrary");


window.currentPoemTitle = null;


async function openPoem(index) {

    const poem =
        poems[index];

    if (!poem) return;


    if (poemTitle) {
        poemTitle.textContent =
            poem.title;
    }


    if (poemText) {
        poemText.textContent =
            poem.text;
    }


    window.currentPoemTitle =
        poem.title;


    showPage("poemReader");


    navButtons.forEach(button => {
        button.classList.remove("active");
    });


    updateLikeButtonText();


    await addView(
        poem.title
    );


    await renderComments();

    await renderTrending();

}


if (backToLibrary) {

    backToLibrary.addEventListener(
        "click",
        () => {

            showPage("library");

        }
    );

}


/* ========================================
   7. SUPABASE VIEWS
======================================== */

async function addView(title) {

    try {

        const queryURL =
            `${SUPABASE_URL}/rest/v1/poem_views?title=eq.${encodeURIComponent(title)}`;


        const res =
            await fetch(
                queryURL,
                {
                    headers:
                        supabaseHeaders
                }
            );


        if (!res.ok) {
            throw new Error(
                "Could not fetch views"
            );
        }


        const data =
            await res.json();


        if (data.length === 0) {

            await fetch(
                `${SUPABASE_URL}/rest/v1/poem_views`,
                {
                    method:
                        "POST",

                    headers:
                        supabaseHeaders,

                    body:
                        JSON.stringify({
                            title:
                                title,
                            views:
                                1
                        })
                }
            );

        } else {

            await fetch(
                queryURL,
                {
                    method:
                        "PATCH",

                    headers:
                        supabaseHeaders,

                    body:
                        JSON.stringify({
                            views:
                                Number(
                                    data[0].views || 0
                                ) + 1
                        })
                }
            );

        }

    } catch (error) {

        console.log(
            "Dynasty view error:",
            error
        );

    }

}


/* ========================================
   8. COMMENTS
======================================== */

async function addComment() {

    const nameEl =
        document.getElementById(
            "commentName"
        );

    const textEl =
        document.getElementById(
            "commentText"
        );


    const name =
        nameEl
            ? nameEl.value.trim()
            : "";


    const text =
        textEl
            ? textEl.value.trim()
            : "";


    if (!name || !text) {

        alert(
            getTranslation(
                "fillComments"
            )
        );

        return;
    }


    if (!window.currentPoemTitle) {
        return;
    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/poem_comments`,
                {
                    method:
                        "POST",

                    headers:
                        supabaseHeaders,

                    body:
                        JSON.stringify({
                            title:
                                window.currentPoemTitle,

                            text:
                                `${name}: ${text}`
                        })
                }
            );


        if (!response.ok) {
            throw new Error(
                "Comment could not be posted"
            );
        }


        if (nameEl) {
            nameEl.value = "";
        }


        if (textEl) {
            textEl.value = "";
        }


        await renderComments();

        await renderTrending();


    } catch (error) {

        console.log(
            "Comment error:",
            error
        );

        alert(
            getTranslation(
                "commentError"
            )
        );

    }

}


/* ========================================
   9. RENDER COMMENTS
======================================== */

async function renderComments() {

    const list =
        document.getElementById(
            "commentList"
        );


    if (
        !list ||
        !window.currentPoemTitle
    ) {
        return;
    }


    list.textContent =
        getTranslation(
            "loadingComments"
        );


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/poem_comments?title=eq.${encodeURIComponent(window.currentPoemTitle)}&order=created_at.desc`,
                {
                    headers:
                        supabaseHeaders
                }
            );


        if (!response.ok) {
            throw new Error(
                "Could not load comments"
            );
        }


        const comments =
            await response.json();


        if (
            !Array.isArray(comments) ||
            comments.length === 0
        ) {

            list.textContent =
                getTranslation(
                    "noComments"
                );

            return;
        }


        list.innerHTML = "";


        comments.forEach(comment => {

            const item =
                document.createElement("div");

            item.className =
                "comment-item";


            const strong =
                document.createElement("strong");


            const parts =
                String(
                    comment.text || ""
                ).split(":");


            const name =
                parts.shift() || "";


            const message =
                parts.join(":");


            strong.textContent =
                name;


            const date =
                document.createElement("span");

            date.style.fontWeight =
                "400";

            date.style.color =
                "#888";


            date.textContent =
                ` • ${new Date(
                    comment.created_at
                ).toLocaleString()}`;


            strong.appendChild(date);


            const paragraph =
                document.createElement("p");


            paragraph.textContent =
                message;


            item.appendChild(
                strong
            );

            item.appendChild(
                paragraph
            );


            list.appendChild(
                item
            );

        });


    } catch (error) {

        console.log(
            "Comment loading error:",
            error
        );


        list.textContent =
            getTranslation(
                "commentError"
            );

    }

}


/* ========================================
   10. COMMENT COUNT
======================================== */

async function getCommentCount(title) {

    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/poem_comments?title=eq.${encodeURIComponent(title)}&select=id`,
                {
                    headers:
                        supabaseHeaders
                }
            );


        if (!response.ok) {
            return 0;
        }


        const data =
            await response.json();


        return Array.isArray(data)
            ? data.length
            : 0;


    } catch {

        return 0;

    }

}


/* ========================================
   11. TRENDING
======================================== */

async function renderTrending() {

    const section =
        document.getElementById(
            "trendingSection"
        );

    const list =
        document.getElementById(
            "trendingList"
        );


    if (!section || !list) {
        return;
    }


    try {

        const response =
            await fetch(
                `${SUPABASE_URL}/rest/v1/poem_views?order=views.desc&limit=3`,
                {
                    headers:
                        supabaseHeaders
                }
            );


        if (!response.ok) {
            throw new Error(
                "Trending failed"
            );
        }


        const sorted =
            await response.json();


        if (
            !Array.isArray(sorted) ||
            sorted.length === 0
        ) {

            section.style.display =
                "none";

            return;
        }


        section.style.display =
            "block";


        list.innerHTML = "";


        for (
            const row of sorted
        ) {

            const comments =
                await getCommentCount(
                    row.title
                );


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "trending-card";


            const title =
                document.createElement(
                    "b"
                );


            title.textContent =
                row.title;


            const meta =
                document.createElement(
                    "div"
                );


            meta.className =
                "trending-meta";


            const views =
                document.createElement(
                    "span"
                );


            views.textContent =
                `👁 ${row.views} ${getTranslation("views")}`;


            const commentCount =
                document.createElement(
                    "span"
                );


            commentCount.textContent =
                `💬 ${comments} ${getTranslation("comments")}`;


            meta.appendChild(
                views
            );

            meta.appendChild(
                commentCount
            );


            card.appendChild(
                title
            );

            card.appendChild(
                meta
            );


            card.addEventListener(
                "click",
                () => {

                    const index =
                        poems.findIndex(
                            poem =>
                                poem.title ===
                                row.title
                        );


                    if (index !== -1) {
                        openPoem(index);
                    }

                }
            );


            list.appendChild(
                card
            );

        }


    } catch (error) {

        console.log(
            "Trending error:",
            error
        );

    }

}


document.addEventListener(
    "DOMContentLoaded",
    () => {
        renderTrending();
    }
);


/* ========================================
   12. EYES FOLLOW MOUSE
======================================== */

const eyes =
    document.querySelectorAll(
        ".eye"
    );


document.addEventListener(
    "mousemove",
    event => {

        eyes.forEach(eye => {

            const pupil =
                eye.querySelector(
                    ".pupil"
                );


            if (!pupil) {
                return;
            }


            const rect =
                eye.getBoundingClientRect();


            const centerX =
                rect.left +
                rect.width / 2;


            const centerY =
                rect.top +
                rect.height / 2;


            const angle =
                Math.atan2(
                    event.clientY -
                        centerY,

                    event.clientX -
                        centerX
                );


            const distance =
                Math.min(
                    9,

                    Math.hypot(
                        event.clientX -
                            centerX,

                        event.clientY -
                            centerY
                    ) / 12
                );


            const x =
                Math.cos(angle) *
                distance;


            const y =
                Math.sin(angle) *
                distance;


            pupil.style.transform =
                `translate(
                    calc(-50% + ${x}px),
                    calc(-50% + ${y}px)
                )`;

        });

    }
);


/* ========================================
   13. THEME
======================================== */

const themeButtons =
    document.querySelectorAll(
        "[data-theme]"
    );


themeButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const theme =
                button.dataset.theme;


            if (theme === "light") {

                document.body.classList.add(
                    "light"
                );

            } else {

                document.body.classList.remove(
                    "light"
                );

            }


            themeButtons.forEach(btn => {
                btn.classList.remove(
                    "selected"
                );
            });


            button.classList.add(
                "selected"
            );

        }
    );

});


/* ========================================
   14. BACKGROUND TEXTURES
======================================== */

const textureButtons =
    document.querySelectorAll(
        "[data-texture]"
    );


const textureClasses = [
    "texture-dots",
    "texture-grid",
    "texture-plain",
    "texture-diagonal",
    "texture-crosshatch",
    "texture-waves",
    "texture-blueprint",
    "texture-noise",
    "texture-hexagons"
];


textureButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const texture =
                button.dataset.texture;


            document.body.classList.remove(
                ...textureClasses
            );


            if (
                texture &&
                texture !== "plain"
            ) {

                document.body.classList.add(
                    `texture-${texture}`
                );

            }


            textureButtons.forEach(
                btn => {

                    btn.classList.remove(
                        "selected"
                    );

                }
            );


            button.classList.add(
                "selected"
            );

        }
    );

});


/* ========================================
   15. LANGUAGE SYSTEM
======================================== */

const languageButtons =
    document.querySelectorAll(
        ".language-card"
    );


function getTranslation(key) {

    const currentLanguage =
        localStorage.getItem(
            "dynastyLanguage"
        ) || "en";


    return (
        translations[currentLanguage]?.[key] ||
        translations.en[key] ||
        key
    );

}


function applyLanguage(language) {

    const selectedLanguage =
        translations[language]
            ? language
            : "en";


    const dictionary =
        translations[
            selectedLanguage
        ];


    /* ------------------------------------
       NORMAL TEXT
    ------------------------------------ */

    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (
                dictionary[key] !==
                undefined
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    /* ------------------------------------
       INPUT PLACEHOLDERS
    ------------------------------------ */

    document
        .querySelectorAll(
            "[data-i18n-placeholder]"
        )
        .forEach(element => {

            const key =
                element.dataset
                    .i18nPlaceholder;


            if (
                dictionary[key] !==
                undefined
            ) {

                element.placeholder =
                    dictionary[key];

            }

        });


    /* ------------------------------------
       LANGUAGE SELECTION
    ------------------------------------ */

    languageButtons.forEach(
        button => {

            button.classList.remove(
                "selected"
            );

            button.classList.remove(
                "selected-language"
            );


            if (
                button.dataset.language ===
                selectedLanguage
            ) {

                button.classList.add(
                    "selected"
                );

            }

        }
    );


    document.documentElement.lang =
        selectedLanguage;


    localStorage.setItem(
        "dynastyLanguage",
        selectedLanguage
    );


    /* ------------------------------------
       LIKE TEXT
    ------------------------------------ */

    updateLikeButtonText();


    /* ------------------------------------
       COMMENTS
    ------------------------------------ */

    if (window.currentPoemTitle) {

        renderComments();

    }


    /* ------------------------------------
       TRENDING
    ------------------------------------ */

    renderTrending();

}


/* ========================================
   LANGUAGE BUTTON EVENTS
======================================== */

languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const language =
                button.dataset.language;


            if (language) {

                applyLanguage(
                    language
                );

            }

        }
    );

});


/* ========================================
   16. COPY DYNASTY LINK
======================================== */

const copyLink =
    document.getElementById(
        "copyLink"
    );


if (copyLink) {

    copyLink.addEventListener(
        "click",
        async () => {

            const originalHTML =
                copyLink.innerHTML;


            try {

                await navigator.clipboard
                    .writeText(
                        window.location.href
                    );


                copyLink.innerHTML = `
                    <i class="fa-solid fa-check"></i>
                    <span>
                        ${getTranslation(
                            "copied"
                        )}
                    </span>
                `;


                setTimeout(
                    () => {

                        copyLink.innerHTML =
                            originalHTML;

                    },
                    2000
                );


            } catch {

                alert(
                    getTranslation(
                        "copied"
                    )
                );

            }

        }
    );

}


/* ========================================
   17. LIKE SYSTEM
======================================== */

let likedPoems = {};


try {

    likedPoems =
        JSON.parse(
            localStorage.getItem(
                "dynastyLikedPoems"
            )
        ) || {};

} catch {

    likedPoems = {};

}


const likeButton =
    document.getElementById(
        "likePoem"
    );


function updateLikeButtonText() {

    if (!likeButton) {
        return;
    }


    const textElement =
        likeButton.querySelector(
            "[data-i18n]"
        );


    if (!textElement) {
        return;
    }


    const isLiked =
        !!likedPoems[
            window.currentPoemTitle
        ];


    textElement.textContent =
        getTranslation(
            isLiked
                ? "liked"
                : "like"
        );

}


function updateLikeButtonVisual() {

    if (!likeButton) {
        return;
    }


    const isLiked =
        !!likedPoems[
            window.currentPoemTitle
        ];


    likeButton.classList.toggle(
        "liked",
        isLiked
    );


    const icon =
        likeButton.querySelector(
            "i"
        );


    if (icon) {

        icon.className =
            isLiked
                ? "fa-solid fa-heart"
                : "fa-regular fa-heart";

    }


    updateLikeButtonText();

}


if (likeButton) {

    likeButton.addEventListener(
        "click",
        () => {

            const title =
                window.currentPoemTitle;


            if (!title) {
                return;
            }


            likedPoems[title] =
                !likedPoems[title];


            localStorage.setItem(
                "dynastyLikedPoems",
                JSON.stringify(
                    likedPoems
                )
            );


            updateLikeButtonVisual();

        }
    );

}


/* ========================================
   18. SHARE POEM
======================================== */

const sharePoemButton =
    document.getElementById(
        "sharePoem"
    );


if (sharePoemButton) {

    sharePoemButton.addEventListener(
        "click",
        async () => {

            const title =
                window.currentPoemTitle ||
                "Dynasty Poem";


            const shareData = {

                title:
                    title,

                text:
                    `Read "${title}" on Dynasty.`,

                url:
                    window.location.href

            };


            try {

                if (
                    navigator.share
                ) {

                    await navigator.share(
                        shareData
                    );

                    return;

                }


                throw new Error(
                    "Web Share unavailable"
                );


            } catch (error) {

                try {

                    await navigator.clipboard
                        .writeText(
                            window.location.href
                        );


                    alert(
                        getTranslation(
                            "poemLinkCopied"
                        )
                    );


                } catch {

                    alert(
                        getTranslation(
                            "poemLinkCopied"
                        )
                    );

                }

            }

        }
    );

}


/* ========================================
   19. POEM SEARCH
   TITLES ONLY
======================================== */

const poemSearch =
    document.getElementById(
        "poemSearch"
    );


if (poemSearch) {

    poemSearch.addEventListener(
        "input",
        () => {

            const searchTerm =
                poemSearch.value
                    .toLowerCase()
                    .trim();


            const poemItems =
                document.querySelectorAll(
                    ".poem-title-btn"
                );


            poemItems.forEach(
                (item, index) => {

                    const poem =
                        poems[index];


                    if (!poem) {
                        return;
                    }


                    const title =
                        poem.title
                            .toLowerCase();


                    item.style.display =
                        title.includes(
                            searchTerm
                        )
                            ? ""
                            : "none";

                }
            );

        }
    );

}


/* ========================================
   20. STARTUP
======================================== */

function initializeDynasty() {

    const savedLanguage =
        localStorage.getItem(
            "dynastyLanguage"
        );


    if (
        savedLanguage &&
        translations[
            savedLanguage
        ]
    ) {

        applyLanguage(
            savedLanguage
        );

    } else {

        applyLanguage("en");

    }


    updateLikeButtonVisual();

}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeDynasty
    );

} else {

    initializeDynasty();

}
