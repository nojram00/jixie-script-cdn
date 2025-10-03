# Script Unification Recommendation

## Current State Analysis

### Identified Differences

The four scripts share identical core functionality but differ in two key areas:

1. **Conditional Logic**: Each script targets different combinations of `is_homepage` and `is_mobile` flags
2. **Script URLs**: Each uses a different Jixie script URL based on the target scenario
3. **Console Messages**: Each has unique logging messages for identification

### Script Variations

| Script | Homepage | Mobile | Jixie Script ID | Console Message |
|--------|----------|--------|----------------|-----------------|
| Home | ✓ | ✗ | jx-GM29180G0dns.min.js | Fullepisodes (Home) |
| Home Mobile | ✓ | ✓ | jx-GM301806MBEG.min.js | Fullepisodes (Home - Mobile) |
| Subdirectories | ✗ | ✗ | jx-GM31180lY1Ap.min.js | Fullepisodes (/*) |
| Subdirectories Mobile | ✗ | ✓ | jx-GM32180jLwTM.min.js | Fullepisodes (/* - Mobile) |

## Unification Strategy

### Recommended Approach

Create a single script that dynamically determines the appropriate Jixie script URL and console message based on the `is_homepage` and `is_mobile` flags.

### Benefits

- **Maintainability**: Single codebase reduces maintenance overhead
- **Consistency**: Ensures identical GPT loading logic across all scenarios
- **Scalability**: Easy to add new conditions or modify existing ones
- **Debugging**: Centralized logging and error handling

### Implementation Structure

```javascript
var is_homepage = {{IS_HOMEPAGE}}
var is_mobile = {{IS_MOBILE}}

// Configuration mapping
const scriptConfig = {
    'home-desktop': {
        scriptId: 'jx-GM29180G0dns.min.js',
        message: 'Fullepisodes (Home) Jixie HB - Loaded'
    },
    'home-mobile': {
        scriptId: 'jx-GM301806MBEG.min.js', 
        message: 'Fullepisodes (Home - Mobile) Jixie HB - Loaded'
    },
    'sub-desktop': {
        scriptId: 'jx-GM31180lY1Ap.min.js',
        message: 'Fullepisodes (/*) Jixie HB - Loaded'
    },
    'sub-mobile': {
        scriptId: 'jx-GM32180jLwTM.min.js',
        message: 'Fullepisodes (/* - Mobile) Jixie HB - Loaded'
    }
};

// Determine configuration key
const configKey = `${is_homepage ? 'home' : 'sub'}-${is_mobile ? 'mobile' : 'desktop'}`;
const config = scriptConfig[configKey];

// Shared GPT and Jixie loading logic with dynamic URL
```

### Key Improvements

1. **Configuration-Driven**: Script URLs and messages stored in a lookup table
2. **Dynamic Loading**: Single logic path that adapts based on flags
3. **Maintainable**: Changes to GPT loading logic only need to be made once
4. **Extensible**: New scenarios can be added by extending the configuration object

### Migration Steps

1. **Test Current Scripts**: Ensure all four variants work as expected
2. **Create Unified Version**: Implement the single script with configuration mapping
3. **Parallel Testing**: Run unified script alongside existing ones to verify behavior
4. **Gradual Rollout**: Replace scripts one scenario at a time
5. **Monitor Performance**: Ensure no degradation in ad loading performance

### Considerations

- **Error Handling**: Add fallback mechanisms if configuration lookup fails
- **Performance**: Minimal overhead from configuration lookup
- **Debugging**: Enhanced logging to identify which configuration is active
- **Future Proofing**: Structure allows for easy addition of new device types or page categories
