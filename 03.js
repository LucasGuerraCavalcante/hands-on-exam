// 3. Given the array below, write a program to group the consultants by company. (1 point)
 
let consultants = [
  { name: 'Peyton Turner', company: 'Walker Inc' },
  { name: 'Isaias Fritsch', company: 'Walker Inc' },
  { name: 'Susana Wilderman', company: 'Nolan Inc' }
]
 
// Output should be:
// {
//   Walker Inc: [
//     {
//     name:"Peyton Turner",
//     company:"Walker Inc"
//     },
//     {
//     name:"Isaias Fritsch",
//     company:"Walker Inc"
//     }
//   ],
//   Nolan Inc: [
//     {
//     name:"Susana Wilderman",
//     company:"Nolan Inc"
//   }
//   ]
// }

const groupConsultantsByCompany = (consultants) => {
	return consultants
		.reduce((obj, consultant) => {
			return Object.assign(obj, { [consultant['company']]:( obj[consultant['company']] || [] ).concat(consultant)})
		}, {})
}

console.log(groupConsultantsByCompany(consultants))
