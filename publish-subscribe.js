/**
 * Created by binyoyo on 15/11/10.
 */
var pubSub = {};

(function (q) {

	var topics = {};
	var subUid = -1;

	q.publish = function(topic, args) {
		if (!topics[topic]) {
			return false;
		}
		var subscribers = topics[topic] || [];
		var lenght = subscribers.length || 0;
		while (lenght--) {
			subscribers[lenght].func(topic, args);
		}
		return this;
	}

	q.subscibe = function(topic, func)	{
		if (!topics[topic]) {
			topics[topic] = [];
		}
		var token = (++subUid).toString();
		topics[topic].push({
			'token': token,
			'func': func
		});
		return token;
	}

	q.unsubscribe = function(token) {
		for (var m in topics) {
			if (topics.hasOwnProperty(m) && topics[m].length) {
				for (var i = 0; i < topics[m].length; i++) {
					if (topics[m][i].token === token) {
						topics[m].splice(i, 0);
						return token;
					}
				}
			}
		}
		return false;
	}
})(pubSub);
