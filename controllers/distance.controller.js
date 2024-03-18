// dummy data
// const zoneBaseInfo = new Map([
//     ['Central', { baseDistanceInKm: 5, basePriceInEuros: 10.00 }],
//     ['North', { baseDistanceInKm: 6, basePriceInEuros: 12.00 }],
//     ['South', { baseDistanceInKm: 7, basePriceInEuros: 11.00 }],
//     ['East', { baseDistanceInKm: 8, basePriceInEuros: 13.00 }],
//     ['West', { baseDistanceInKm: 9, basePriceInEuros: 14.00 }]
//   ]);

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const calculatePrice = async(item_type, zone, total_distance) => {
    try{
        console.log(item_type, zone, total_distance)
        
        const baseInfo = await prisma.newZone.findUnique({
            where: {
                zone: zone
            }
        })

        console.log(baseInfo)
        // const baseInfo = zoneBaseInfo.get(zone);
        if(!baseInfo) throw new Error("Invalid zone");

        const { baseDistanceInKm, basePriceInEuros } = baseInfo;

        let price;

        // item type = perishable or non-perishable

        // For distances beyond the base, e.g., 1.5 EUR/km for perishable items and 1 EUR/km for non-perishable items.

        if(item_type === 'perishable'){
            price = basePriceInEuros + (total_distance>baseDistanceInKm ? (total_distance-baseDistanceInKm)*1.5 : 0);
        }
        else if(item_type === 'non-perishable'){
            price = basePriceInEuros + (total_distance>baseDistanceInKm ? (total_distance-baseDistanceInKm)*1 : 0);
        }
        else{
            throw new Error("Invalid item type");
        }

        return price;
    }
    catch(err){
        return err.message;
    }
}


module.exports = calculatePrice;