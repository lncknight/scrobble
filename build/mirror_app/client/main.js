if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['/home/emmanuel/Dev/scrobble/app/client/main.js']) {
   __coverage__['/home/emmanuel/Dev/scrobble/app/client/main.js'] = {"path":"/home/emmanuel/Dev/scrobble/app/client/main.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":38}}},"2":{"name":"(anonymous_2)","line":5,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":23}}},"3":{"name":"(anonymous_3)","line":6,"loc":{"start":{"line":6,"column":99},"end":{"line":6,"column":109}}},"4":{"name":"(anonymous_4)","line":11,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":23}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":3,"column":3}},"2":{"start":{"line":5,"column":0},"end":{"line":9,"column":3}},"3":{"start":{"line":6,"column":4},"end":{"line":8,"column":7}},"4":{"start":{"line":7,"column":8},"end":{"line":7,"column":40}},"5":{"start":{"line":11,"column":0},"end":{"line":13,"column":3}},"6":{"start":{"line":12,"column":4},"end":{"line":12,"column":70}}},"branchMap":{}};
}
var __cov_y1z2JFaQ8IW32IElz_OVjw = __coverage__['/home/emmanuel/Dev/scrobble/app/client/main.js'];
__cov_y1z2JFaQ8IW32IElz_OVjw.s['1']++;Meteor.subscribe('myGames',function(){__cov_y1z2JFaQ8IW32IElz_OVjw.f['1']++;});__cov_y1z2JFaQ8IW32IElz_OVjw.s['2']++;Deps.autorun(function(){__cov_y1z2JFaQ8IW32IElz_OVjw.f['2']++;__cov_y1z2JFaQ8IW32IElz_OVjw.s['3']++;Meteor.subscribe('currentGame',Session.get('currentGame'),Session.get('playerStatusChange'),function(){__cov_y1z2JFaQ8IW32IElz_OVjw.f['3']++;__cov_y1z2JFaQ8IW32IElz_OVjw.s['4']++;Session.set('boardReady',true);});});__cov_y1z2JFaQ8IW32IElz_OVjw.s['5']++;Deps.autorun(function(){__cov_y1z2JFaQ8IW32IElz_OVjw.f['4']++;__cov_y1z2JFaQ8IW32IElz_OVjw.s['6']++;Meteor.subscribe('currentPlayers',Session.get('currentPlayers'));});
