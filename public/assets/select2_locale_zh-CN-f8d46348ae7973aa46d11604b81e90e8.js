!function(t){"use strict";t.extend(t.fn.select2.defaults,{formatNoMatches:function(){return"没有找到匹配项"},formatInputTooShort:function(t,n){var o=n-t.length;return"请再输入"+o+"个字符"},formatInputTooLong:function(t,n){var o=t.length-n;return"请删掉"+o+"个字符"},formatSelectionTooBig:function(t){return"你只能选择最多"+t+"项"},formatLoadMore:function(){return"加载结果中..."},formatSearching:function(){return"搜索中..."}})}(jQuery);