var colonyObjects = {
	processCostForPopover: function(item) {
		var str = "";
		if (item.cost == undefined) {
			return "This item is not purchasable";
		}
		else {
			/*

			*/

			return twoSidedPopover(item,"cost");
		}
	},
	processItemForPopover: function(item) {
		if (item.items == undefined) {return;}
		else {
			var str = "";
			switch (item.name) {
				case this.itemGroups.map.name: {
					return oneSidedPopover(item,"items");
				}
				case this.itemGroups.wishingWell.name: {
					return oneSidedPopover(item,"items");
				}
				default: {
					return twoSidedPopover(item,"items");
				}
			}
		}
	},
	bonusStatus: {
		accumulator: true,
		speed: false
	},
	itemGroups: {
		map: {
			name: "Map",
			order:1,
			active: false,
			selected: false,
			items: {}
		},
		wishingWell: {
			name: "Wishing Well",
			order:2,
			active:false,
			selected: false,
			items: wells
		},
		resources: {
			name: "Resources",
			order:3,
			active:true,
			selected: true,
			items: {
				wood: {
					name: "Wood",
					order: 1,
					total: 200,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 2,
						speed: 1
					}
				},
				lumber: {
					name: "Lumber",
					order: 2,
					total: 0,
					accumulated:0,
					active:false,
					production: {
						perInterval: 1,
						accumulator: 1,
						speed: 1
					}
				},
				brick: {
					name: "Brick",
					order: 3,
					total: 0,
					accumulated:0,
					active:false,
					production: {
						perInterval: 1,
						accumulator: 1,
						speed: 1
					}
				},
				grain: {
					name: "Grain",
					order: 4,
					total: 0,
					accumulated:0,
					active:false,
					production: {
						perInterval: 1,
						accumulator: 1,
						speed: 1
					}
				},
				ore: {
					name: "Ore",
					order: 5,
					total: 0,
					accumulated:0,
					active:false,
					production: {
						perInterval: 1,
						accumulator: 1,
						speed: 1
					}
				}
			}
		},
		animals: {
			name: "Animals",
			order:4,
			active: true,
			selected: false,
			items: {
				chicken: {
					name: "Chicken",
					order: 1,
					total: 1,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					}
				},
				sheep:{
					name: "Sheep",
					order: 2,
					total: 1,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					}
				},
				cows: {
					name: "Cow",
					order: 3,
					total: 1,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					}
				},
				horse: {
					name: "Horse",
					order: 4,
					total: 0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					}
				}
			}
		},
		metals: {
			name: "Metals",
			order:5,
			active:false,
			selected: false,
			items: {
				iron:{
					name: "Iron",
					order: 1,
					total: 0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:1},{ore:5}]
				},
				steel:{
					name: "Steel",
					order: 2,
					total: 0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:2},{iron:2}]
				},
				titanium: {
					name: "Titanium",
					order: 3,
					total: 0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:4},{steel:10}]
				},
				tritanium: {
					name: "Tritanium",
					order: 4,
					total:0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:10},{titanium:100}]
				},
				trelliumD: {
					name: "Trellium-D",
					order: 5,
					total:0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:100},{tritanium:1000}]
				},
				whatchamametal: {
					name: "WhatCha-Ma-Metal?",
					order: 6,
					total:0,
					accumulated:0,
					active:true,
					production: {
						perInterval: 1,
						accumulator: 10,
						speed: 1
					},
					cost: [{wood:500},{trelliumD:50000}]
				}
			}
		},
		developments: {
			name: "Developments",
			order:6,
			active:false,
			selected: false,
			items: {
				hut: {
					name: "Hut",
					order: 1,
					total: 0,
					active:false,
					cost: [{wood:20}]
				},
				house: {
					name: "House",
					order: 2,
					total: 0,
					active:false,
					cost: [{wood:40},{brick:10},{lumber:30}]
				},
				farm: {
					name: "Farm",
					order: 3,
					total: 0,
					active:false,
					cost: [{wood:100},{brick:50},{steel:25}]
				},
				processingPlant: {
					name: "Processing Plant",
					order: 4,
					total: 0,
					active:false,
					cost: [{wood:500},{brick:500},{grain:500},{ore:500}]
				}
			}
		},
		locations: {
			name: "Locations",
			order: 7,
			active:false,
			selected: false,
			items: {
				hutCollection: {
					name: "Hut Collection",
					order: 2,
					total: 0,
					active:true,
					cost: [{hut:20}]
				},
				smallVillage: {
					name: "Small Village",
					order: 3,
					total: 0,
					active:true,
					cost: [{hutCollection:2},{house:10},{farm:3}]
				},
				village: {
					name: "Village",
					order: 4,
					total: 0,
					active:true,
					cost: [{smallVillage:5}]
				},
				smallTown: {
					name: "Small Town",
					order: 5,
					total: 0,
					active:true,
					cost: [{village:10}]
				},
				town: {
					name: "Town",
					order: 6,
					total: 0,
					active:true,
					cost: [{smallTown:20}]
				},
				smallCity: {
					name: "Small City",
					order: 7,
					total: 0,
					active:true,
					cost: [{town:40}]
				},
				city: {
					name: "City",
					order: 8,
					total: 0,
					active:true,
					cost: [{smallCity:80}]
				},
				metropolis: {
					name: "Metropolis",
					order: 9,
					total: 0,
					active:true,
					cost: [{city:160}]
				}
			}
		}
	}
};