const accordionInfo = [
	{
      title: 'Runing Shoes', 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      type: 'shoes',
      name: 'Addidas',
      showDetail: true
    },
	{
      title: 'T-shirt', 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      type: 'cloths',
      name: 'Roadster',
      showDetail: false
    },
	{
      title: 'Shirt', 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      type: 'cloths',
      name: '',
      showDetail: false
    },
	{
      title: 'Full Sleeve Shirt', 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      type: 'cloths',
      name: 'HighLander',
      showDetail: false
    },
	{
      title: 'Sports Shoes', 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
      type: 'shoes',
      name: 'Bata',
      showDetail: false
    }
]

const accordion = new Vue({
	el: "#accordion",
	data: {
		title: 'List of Brokers',
		accordionList: accordionInfo,
		type: ''
	},
	methods: {
		toggleDetails: function(accordionInfo){
			accordionInfo.showDetail = !accordionInfo.showDetail
		},
		filterList: function(){
			this.type = event.target.value;
		}
	},
	computed: {
      uniqueItemsList: function(){
        const types = [];
        this.accordionList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }
    }
});











