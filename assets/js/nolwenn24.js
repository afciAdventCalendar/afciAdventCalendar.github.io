/**
 * Gère l'animation du canvas servant de case au calendrier de l'avent.
 */
const nwm24 = 
{
    urlFont: "assets/font/Raleway/static/Raleway-Bold.ttf",
    canvas : document.querySelector("canvas.nwm-back"),
    ctx: {},
    grid: { h: 30, w: 30 },
    settings: {
        animationTime: 1000,
        color: "#eb6d13",
        animeOptions: {
            duration: 1000
        },
        explodeRadius: 200
    },
    
    /**
     *  Lance le fonctionnement de la case 24.
     * @return {void}
     */
    start()
    {
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        this.bgColor();
        this.makeGrid();
        this.canvas.addEventListener("click", this.destroyEvent.bind(this));
    },
    /**
     * Donne au canvas la taille de son parent.
     * @return {void}
     */
    resize(){
        // TODO: la virgule n'étant pas pris en compte, peut être centrer l'élément.
        let parent = this.canvas.parentElement.getBoundingClientRect();
        this.canvas.width = parent.width;
        this.canvas.height = parent.height;
    },
    /**
     * Rempli le canvas de la couleur donnée dans la configuration puis rend son background-color transparent.
     * @return {void}
     */
    async bgColor()
    {
        this.ctx.fillStyle = this.settings.color;
        this.ctx.fillRect(0,0, this.canvas.width, this.canvas.height);
        this.canvas.style.backgroundColor = "transparent";
        // Ajout de la police
        const superFont = new FontFace("Raleway", `url(${this.urlFont})`);
        const font = await superFont.load();
        document.fonts.add(font);
        // création du cercle blanc
        this.ctx.fillStyle = "white";
        this.ctx.arc(60, 60, 30, 0, Math.PI*2)
        this.ctx.fill();
        // Affichage du numéro de la case.
        this.ctx.fillStyle = "black";
        this.ctx.font = "24px Raleway";
        this.ctx.textAlign = "center";
        this.ctx.fillText("24", 60, 65);
        if(!this.destroyed) return;
        this.ctx.fillStyle = "white";
        this.ctx.font = "24px Raleway";
        this.ctx.textAlign = "left";
        // TODO : trouver le bon placement
        this.ctx.fillText("par Nolwenn", 60, 65);

    },
    /**
     * Fabrique une grille de taille donnée dans la configuration.
     * @return {void}
     */
    makeGrid()
    {
        this.grid.c = [];
        this.grid.cw = Math.ceil(this.canvas.width / this.grid.w);
        this.grid.ch = Math.ceil(this.canvas.height / this.grid.h);
        for (let w = 0; w < this.grid.w; w++) {
            for (let h = 0; h < this.grid.h; h++) {
                this.grid.c.push({
                    t:this.grid.ch*h, 
                    l:this.grid.cw*w
                })
            }
            
        }
    },
    /**
     * Si la grille n'est pas vide, calcul le délai entre chaque cases à détruire.
     * @return {void}
     */
    destroyEvent()
    {
        
        if(this.destroyed)
        {
            this.settings.color = "#285460";
            this.bgColor();
            this.makeGrid();
            this.destroyed = false;
            return;
        }
        if(!this.grid.c.length)return;
        let max = this.grid.c.length
        let time = this.settings.animationTime/max;
        for (let i = 0; i < max; i++) {
            setTimeout(this.destroy.bind(this), time*i)
        }
        this.destroyed = true;
    },
    /**
     * Choisi aléatoirement une case de la grille, l'efface, la retire du tableau et lance son animation.
     * @return {void}
     */
    destroy()
    {
        const r = this.randomNumber(this.grid.c.length);
        this.ctx.clearRect(this.grid.c[r].l,this.grid.c[r].t, this.grid.cw, this.grid.ch);
        this.explode({...this.grid.c[r]});
        this.grid.c.splice(r,1);

    },
    /**
     * Crée une div en position absolute s'animant aléatoirement avant de disparaître.
     * @param  {object} c objet contenant la position x et y d'une case
     */
    explode(c)
    {
        const d = document.createElement("div");
        d.style.width = this.grid.cw+"px";
        d.style.height = this.grid.ch+"px";
        d.style.backgroundColor = this.settings.color;
        d.style.position = "absolute";
        this.canvas.parentElement.append(d);
        const keyframes = this.randomExplode(c);
        let anime = d.animate(keyframes, this.settings.animeOptions)
        anime.addEventListener("finish", ()=>d.remove());
    },
    /**
     * Crée la liste des étapes clef de l'animation.
     * @param {object} c objet contenant les positions x et y d'une case
     * @returns {Keyframe}
     */
    randomExplode(c)
    {
        const keyframes = {};
        keyframes.top = [
            `${c.t}px`, 
            `${c.t+(this.randomNumber())*this.randomNumber(this.settings.explodeRadius)}px`
        ];
        keyframes.left = [
            `${c.l}px`, 
            `${c.l+(this.randomNumber())*this.randomNumber(this.settings.explodeRadius)}px`
        ];
        keyframes.transform = [
            "rotate(0)",
            "rotate(360deg)"
        ]
        keyframes.opacity = [1, 0]
        return keyframes;
    },
    /**
     * Retourne un nombre aléatoire si un maximum est donné, 
     * sinon retourne aléatoirement 1 ou -1
     * @param {number?} max valeur maximum du nombre aléatoire
     * @returns 
     */
    randomNumber(max)
    {
        if(max) return Math.floor(Math.random()*max);
        return Math.random()<0.5?1:-1;
    }
}
nwm24.start();