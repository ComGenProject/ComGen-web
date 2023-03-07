async function copyValue(value) {
    await navigator.clipboard.writeText(value)
}

function generateSwordCommand(material, username, isSharpness, isFireAspect, isBaneOfArthropods, isVanishing,
                                isKnockback, isLooting, isMending, isSmite, isSweeping, isUnbreaking){

    if(isSharpness || isFireAspect || isBaneOfArthropods || isVanishing || isKnockback || isLooting ||
        isMending || isSmite || isSweeping || isUnbreaking){

        let defUsername
        let sharpness
        let fireAspect
        let baneOfArthropods
        let vanishing
        let knockback
        let looting
        let mending
        let smite
        let sweeping
        let unbreaking

        username ? defUsername = username + " " : defUsername = "@p"
        isSharpness ? sharpness = "{id:\"minecraft:sharpness\",lvl:5s}" : sharpness = ""
        isFireAspect ? fireAspect = "{id:\"minecraft:fire_aspect\",lvl:2s}" : fireAspect = ""
        isBaneOfArthropods ? baneOfArthropods = "{id:\"minecraft:bane_of_arthropods\",lvl:5s}" : baneOfArthropods = ""
        isVanishing ? vanishing = "{id:\"minecraft:vanishing_curse\",lvl:1s}" : vanishing = ""
        isKnockback ? knockback = "{id:\"minecraft:knockback\",lvl:2s}" : knockback = ""
        isLooting ? looting = "{id:\"minecraft:looting\",lvl:3s}" : looting = ""
        isMending ? mending = "{id:\"minecraft:mending\",lvl:1s}" : mending = ""
        isSmite ? smite = "{id:\"minecraft:smite\",lvl:5s}" : smite = ""
        isSweeping ? sweeping = "{id:\"minecraft:sweeping\",lvl:3s}" : sweeping = ""
        isUnbreaking ? unbreaking = "{id:\"minecraft:unbreaking\",lvl:3s}" : unbreaking = ""


        let outputCommand = "/give " + defUsername + material + "_sword{Enchantments:[" + sharpness + fireAspect
            + baneOfArthropods + vanishing + knockback + looting + mending + smite + sweeping + unbreaking + "]}"

        document.getElementById('outputCommand').value = outputCommand.replaceAll("}{", "},{")
    }else{

        let defUsername

        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }

        document.getElementById('outputCommand').value = '/give ' + defUsername + material + "_sword"
    }
}

function generatePickaxeCommand(material, username, IsVanish, IsEfficiency, IsFortune,
                                IsMending, IsSilkTouch, IsUnbreaking){

    if(IsVanish || IsEfficiency || IsFortune || IsMending || IsSilkTouch || IsUnbreaking){
        
        let defUsername
        let vanish
        let efficiency
        let fortune
        let mending
        let silkTouch
        let unbreaking


        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }
        if(IsVanish){
            vanish = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            vanish = ""
        }
        if(IsEfficiency){
            efficiency = "{id:\"minecraft:efficiency\",lvl:5s}"
        }else{
            efficiency = ""
        }
        if(IsFortune){
            fortune = "{id:\"minecraft:fortune\",lvl:3s}"
        }else{
            fortune = ""
        }
        if(IsMending){
            mending = "{id:\"minecraft:mending\",lvl:1s}"
        }else{
            mending = ""
        }
        if(IsSilkTouch){
            silkTouch = "{id:\"minecraft:silk_touch\",lvl:1s}"
        }else{
            silkTouch = ""
        }
        if(IsUnbreaking){
            unbreaking = "{id:\"minecraft:unbreaking\",lvl:3s}"
        }else{
            unbreaking = ""
        }

        let outputCommand = "/give " + defUsername + material + "_pickaxe{Enchantments:[" + vanish + efficiency +
                                fortune + mending + silkTouch + unbreaking + "]}"

        document.getElementById('outputCommand').value = outputCommand.replaceAll("}{", "},{")
    
    }else{

        let defUsername

        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }

        document.getElementById('outputCommand').value = '/give ' + defUsername + material + "_pickaxe"
    }
    
}

function generateAxeCommand(material, username, isVanishing, isEfficiency, isFortune,
                                isMending, isSilkTouch, isUnbreaking){


    if(isVanishing || isEfficiency || isFortune || isMending || isSilkTouch || isUnbreaking){

        let defUsername
        let baneOfArthropods
        let vanishing
        let efficiency
        let fortune
        let mending
        let sharpness
        let silkTouch
        let smite
        let unbreaking


        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }
        if(isBaneOfArthropods){
            baneOfArthropods = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            baneOfArthropods = ""
        }
        if(isVanishing){
            vanishing = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            vanishing = ""
        }
        if(isEfficiency){
            efficiency = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            efficiency = ""
        }
        if(isFortune){
            fortune = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            fortune = ""
        }
        if(isMending){
            mending = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            mending = ""
        }
        if(isSharpness){
            sharpness = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            sharpness = ""
        }
        if(isSilkTouch){
            silkTouch = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            silkTouch = ""
        }
        if(isSmite){
            smite = "{id:\"minecraft:vanishing_curse\",lvl:1s}"
        }else{
            smite = ""
        }

        let outputCommand = "/give " + defUsername + material + "_axe{Enchantments:[" + baneOfArthropods +
            vanishing + efficiency + fortune + mending + sharpness + silkTouch + smite + unbreaking + "]}"

        document.getElementById('outputCommand').value = outputCommand.replaceAll("}{", "},{")

    }else{

        let defUsername

        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }

        document.getElementById('outputCommand').value = '/give ' + defUsername + material + "_axe"
    }

}

function generateArmorCommand(armorPart, material, username){

    if(isBaneOfArthropods || isVanishing || isEfficiency || isFortune || isMending || isSharpness || isSilkTouch || isSmite || isUnbreaking){

        let outputCommand = "/give " + defUsername + material + armorPart + "{Enchantments:[" + baneOfArthropods +
            vanishing + efficiency + fortune + mending + sharpness + silkTouch + smite + unbreaking + "]}"

        document.getElementById('outputCommand').value = outputCommand.replaceAll("}{", "},{")

    }else{

        let defUsername

        if(username){
            defUsername = username + " "
        }else{
            defUsername = "@p "
        }

        document.getElementById('outputCommand').value = '/give ' + defUsername + material + armorPart
    }

}

