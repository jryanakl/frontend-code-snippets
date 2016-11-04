
var mockObj = [];



function mapConnections(mockObj) {
    var deferred = $q.defer();

    deferred.resolve(_.map(mockObj, mapMockObj));

    return deferred.promise;
}


function mapMockObj(mockObj) {
	var valueProperty = {
        STRING: 'stringval',
        BOOLEAN: 'booleanval',
        DATE: 'dateval',
        INTEGER: 'integerval',
        USER: 'usernameval',
        STRING_ARRAY: 'stringarray'
    };
    var customProperties = {};

    _.each(mockObj.customProperties, function(customProperty) {
      var propertyDefinition = customProperty.customProperty;

       customProperties[propertyDefinition.key] = customProperty[valueProperty[propertyDefinition.type]];
    });

      mockObj.customProperties = customProperties;

      return mockObj;
 }