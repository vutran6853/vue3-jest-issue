import { defineComponent, h } from 'vue'

export default defineComponent({
	name: 'App',
	data() {
		return {
			timer: null
		}
	},
	methods: {
		handleSendMessage() {
			console.log('handleSendMessage()')
		}
	}
})  