module.exports = (db) => {
    const {commande, Plat, Boisson} = db

    if (!db.commande || !db.Plat || !db.Boisson) {
        throw new Error("Certains modèles requis ne sont pas définis dans db");
    }

    commande.belongsToMany(Plat,{
        through: 'CommandePlat',
        foreignKey: 'id_comm',
        otherKey: 'nom_palt'
    })
    
    Plat.belongsToMany(commande, {
        through: 'CommandePlat',
        foreignKey: 'nom_palt',
        otherKey: 'id_comm'
    })

    Boisson.belongsToMany(commande, {
        through: 'CommandeBoisson',
        foreignKey: 'nom_boisson',
        otherKey: 'id_comm'
    })

    commande.belongsToMany(Boisson, {
        through: 'CommandeBoisson',
        foreignKey: 'id_comm',
        otherKey: 'nom_boisson'
    })

}