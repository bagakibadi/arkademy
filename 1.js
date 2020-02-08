function biodata (){
    let biodatapribadi = {
        name : 'Bagus Nur Solayman',
        age : 18,
        address : 'Jalan Simprug Golf 2 Kebayoran Lama Jakarta Selatan',
        hobbies : ['Game Online', 'Nonton Film'],
        is_married : false,
        list_school : [
            {
                nameSchool : 'SDN Gunung 06 Petang',
                yearIn : 2008,
                yearOut : 2013,
                major : null
            },
            {
                nameSchool : 'SMP Negeri 12 Jakarta',
                yearIn : 2013,
                yearOut : 2016,
                major : null
            },
            {
                nameSchool : 'SMK Negeri 6 Jakarta',
                yearIn : 2016,
                yearOut : 2019,
                major : "Animasi"
            }
        ],
        skills : [
            {
                skillName : 'Photoshop',
                level : 'Beginner'
            },
            {
                skillName : 'Adobe Illustrator',
                level : 'Beginner'
            },
            {
                skillName : 'HTML',
                level : 'Beginner'
            },
            {
                skillName : 'CSS',
                level : 'Beginner'
            },
            {
                skillName : 'Javascript',
                level : 'Beginner'
            },
        ],
        interest_in_coding : true
        }
        return JSON.stringify(biodatapribadi);
}
console.log(biodata());