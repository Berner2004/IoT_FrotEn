# REMAINING OPTIMIZATION TASKS

## Part 5: Replace refreshTrends() 
Location: Line 2072
- This is a large function - needs careful replacement with cache-first pattern
- Function should call `applyReadingsToUI()` helper (new)
- Paints cache instantly, then loads full data in background

## Part 6: Replace runLongTermPrediction()
Location: Around line 2245
- Needs `ensureLongTermHistory()` async helper function
- Uses LONG_CACHE for forecast data
- Displays results in your card elements (ltTotal, ltAvg, ltNote, etc.)

## Part 7: Fix Service Worker Registration in setupPWA()
- Check for existing registration before registering new one
- Prevents double-registration issues

## Status
✅ Part 1: CACHE_KEYS + cache functions - DONE
✅ Part 2: getReadings() caching version - DONE  
✅ Part 3: tryPredictServer() endpoint learning - DONE
✅ Part 4: runPrediction() parallel execution - DONE
⏳ Part 5: refreshTrends() cache-first pattern - TODO
⏳ Part 6: runLongTermPrediction() cache version - TODO
⏳ Part 7: Service Worker fix - TODO
