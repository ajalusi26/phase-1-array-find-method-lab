

function superbowlWin(record){
    if(record.find(win => win.result === "W") === undefined){
        return undefined
    }
    const found = record.find(win => win.result === "W")
    return found.year
}


console.log(superbowlWin(record))