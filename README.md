<a id="top"></a>

- [Data Structures](#data-structures)
- [Leetcode Topic Roadmap](#leetcode-topic-roadmap)
  - [1. Arrays \& Hashing](#1-arrays--hashing)
  - [2. Two Pointers](#2-two-pointers)
  - [3. Stacks](#3-stacks)
  - [4. Binary Search](#4-binary-search)
  - [5. Sliding Window](#5-sliding-window)
  - [6. Linked List](#6-linked-list)
  - [7. Trees](#7-trees)
  - [8. Design](#8-design)
  - [9. Tries](#9-tries)
  - [10. Backtracking](#10-backtracking)
  - [11. Heap / Priority Queue](#11-heap--priority-queue)
  - [12. Graphs](#12-graphs)
  - [13. 1-D Dynamic Programming](#13-1-d-dynamic-programming)
  - [14. Intervals](#14-intervals)
  - [15. Greedy](#15-greedy)
  - [16. Advanced Graphs](#16-advanced-graphs)
  - [17. 2-D Dynamic Programming](#17-2-d-dynamic-programming)
  - [18. Bit Manipulation](#18-bit-manipulation)
  - [19. Math \& Geometry](#19-math--geometry)
- [Resources](#resources)

## Data Structures
[🔼 Back to top](#top)

|Data Structure|Code|Search|Insert/Delete|Notes|Language Support
|-|-|-|-|-|-
[Binary Search Tree](https://visualgo.net/en/bst)|[JavaScript](./2020%20&%202021/Data%20Structures/binarySearchTree.js)|O(log n)|O(log n)||C++ ([map](https://cplusplus.com/reference/map/map/) / [set](https://cplusplus.com/reference/set/set/)) & Java ([TreeMap](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html) / [TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html))
Dyanmic Array / ArrayList||Unsorted: O(n) / Sorted: O(log n)|Last Value: O(1) / All other values: O(n)||C++ ([vector](https://cplusplus.com/reference/vector/vector/)), C# ([ArrayList](https://learn.microsoft.com/en-us/dotnet/api/system.collections.arraylist?view=net-7.0)), Java ([ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)), JavaScript ([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)), & Python ([list](https://docs.python.org/3/tutorial/datastructures.html))
[Hash Map / Hash Set](https://visualgo.net/en/hashtable)|[JavaScript](./2020%20&%202021/Data%20Structures/binarySearchTree.js)|O(1)*|O(1)*|Time Complexity is constant on an amortized basis (average)|C++ ([unordered_map](https://cplusplus.com/reference/unordered_map/unordered_map/) / [unordered_set](https://cplusplus.com/reference/unordered_set/unordered_set/)), C# ([Dictionary](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2?view=net-7.0) / [Hashtable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-7.0) / [HashSet](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.hashset-1?view=net-7.0)),  Java ([HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html) / [HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)), JavaScript ([Map*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) / [Set*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)), & Python ([dictionary](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) / [set](https://docs.python.org/3/tutorial/datastructures.html#sets))
[Linked List](https://visualgo.net/en/list)|[JavaScript](./2020%20&%202021/Data%20Structures/ll.js)|O(n)|O(1)
[Min / Max Heap (Priority Queue)](https://visualgo.net/en/heap)||O(n)|O(log n)|Find-min/max: O(1)|C++ ([algorithm / make_heap()](https://cplusplus.com/reference/algorithm/make_heap/)), Java ([PriorityQueue](https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html)), & Python ([heapq](https://docs.python.org/3/library/heapq.html))
[Queue](https://visualgo.net/en/list?mode=Queue)|[JavaScript](./2020%20&%202021/Data%20Structures/queue.js)|O(n)|O(1)|FIFO / LILO (First In First Out / Last In Last Out)|C++ ([queue](https://cplusplus.com/reference/queue/queue/) / [deque](https://cplusplus.com/reference/deque/deque/)), C# ([Queue](https://learn.microsoft.com/en-us/dotnet/api/system.collections.queue?view=net-7.0)), Java ([ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html)), & Python ([deque](https://docs.python.org/3/library/collections.html#collections.deque))
[Stack](https://visualgo.net/en/list?mode=Stack)|[JavaScript](./2020%20&%202021/Data%20Structures/stack.js)|O(n)|O(1)|FILO / LIFO (First In Last Out / Last In First Out)|C++ ([deque](https://cplusplus.com/reference/deque/deque/) / [vector](https://cplusplus.com/reference/vector/vector/) / [stack](https://cplusplus.com/reference/stack/stack/)), C# ([Stack](https://learn.microsoft.com/en-us/dotnet/api/system.collections.stack?view=net-7.0) / [ArrayList](https://learn.microsoft.com/en-us/dotnet/api/system.collections.arraylist?view=net-7.0)), Java ([ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html) / [ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html) / [Stack](https://docs.oracle.com/javase/8/docs/api/java/util/Stack.html)), JavaScript ([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)), & Python ([list](https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks) / [deque](https://docs.python.org/3/library/collections.html#collections.deque))

## Leetcode Topic Roadmap
### 1. Arrays & Hashing
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[1. Two Sum](https://leetcode.com/problems/two-sum/)|Easy|[C++](./2022/Leetcode/problem1.cpp) [JavaScript](./2023/Leetcode/2Sum.js) [Python](./2023/Leetcode/problem1.py)|[YouTube](https://www.youtube.com/watch?v=KLlXCFG5TnA)|
|[36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)|Medium|[Python](./2023/Leetcode/problem36.py)|[YouTube](https://www.youtube.com/watch?v=TjFXEUCMqI8)|
|[41. First Missing Positive](https://leetcode.com/problems/first-missing-positive/)|Hard|[Python](./2024/Leetcode/problem41.py) [TypeScript](./2024/Leetcode/problem41.ts)|[YouTube](https://www.youtube.com/watch?v=8g78yfzMlao)|
|[49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)|Medium|[Python](./2023/Leetcode/problem49.py)|[YouTube](https://www.youtube.com/watch?v=vzdNOK2oB2E)|
|[88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)|Easy|[Python](./2023/Leetcode/problem88.py)|[YouTube](https://www.youtube.com/watch?v=P1Ic85RarKY)|
|[205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/)|Easy|[Python](./2024/Leetcode/problem205.py)|[YouTube](https://www.youtube.com/watch?v=7yF-U1hLEqQ)|
|[217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)|Easy|[C++](./2024/Leetcode/problem217.cpp) [JavaScript](./2023/Leetcode/problem217.js) [Python](./2023/Leetcode/problem217.py)|[YouTube](https://www.youtube.com/watch?v=3OamzN90kPg)|
|[347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements)|Medium|[Python](./2023/Leetcode/problem347.py)|[YouTube](https://www.youtube.com/watch?v=YPTqKIgVk-k)|
|[442. Find all Duplicates in an Array](https://leetcode.com/problems/find-all-duplicates-in-an-array/)|Medium|[Python](./2022/Leetcode/problem442.py)|[YouTube](https://www.youtube.com/watch?v=aMsSF1Il3IY)|
|[2482. Difference Between Ones and Zeros in Row and Column](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/)|Medium|[Python](./2023/Leetcode/problem2482.py)|[YouTube](https://www.youtube.com/watch?v=zBaJewbBamw)|

### 2. Two Pointers
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)|Medium|[Python](./2024/Leetcode/problem11.py)|[YouTube](https://www.youtube.com/watch?v=UuiTKBwPgAo)|
|[15. 3Sum](https://leetcode.com/problems/3sum)|Medium|[Python](./2023/Leetcode/problem15.py)|[YouTube](https://www.youtube.com/watch?v=jzZsG8n2R9A)|
|[26. Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)|Easy|[JavaScript](./2024/Leetcode/problem26.js) [Python](./2023/Leetcode/problem26.py)|[YouTube](https://www.youtube.com/watch?v=DEJAZBq0FDA)|
|[27. Remove Element](https://leetcode.com/problems/remove-element/)|Easy|[Python](./2023/Leetcode/problem27.py)|[YouTube](https://www.youtube.com/watch?v=Pcd1ii9P9ZI)|
|[28. Find the Index of the First Occurence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)|Easy|[Python](./2023/Leetcode/problem28.py) [TypeScript](./2024/Leetcode/problem28.ts)|[YouTube](https://www.youtube.com/watch?v=Gjkhm1gYIMw)|
|[125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)|Easy|[C++](./2022/Leetcode/problem125.cpp) [JavaScript](./2023/Leetcode/problem125.js) [Python](./2024/Leetcode/problem125.py)|[YouTube](https://www.youtube.com/watch?v=jJXJ16kPFWg)|
|[167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)|Medium|[JavaScript](./2024/Leetcode/problem167.js) [Python](./2023/Leetcode/problem167.py)|[YouTube](https://www.youtube.com/watch?v=cQ1Oz4ckceM)|
|[234. Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)|Easy|[Python](./2023/Leetcode/problem234.py) [TypeScript](./2024/Leetcode/problem234.ts)|[YouTube](https://www.youtube.com/watch?v=yOzXms1J6Nk)|
|[344. Reverse String](https://leetcode.com/problems/reverse-string/)|Easy|[C++](./2022/Leetcode/problem344.cpp) [JavaScript](./2022/Leetcode/problem344.js) [Python](./2023/Leetcode/problem344.py)|[YouTube](https://www.youtube.com/watch?v=_d0T_2Lk2qA)|
|[2130. Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/)|Medium|[Python](./2023/Leetcode/problem2130.py)|[YouTube](https://www.youtube.com/watch?v=doj95MelfSA)|

### 3. Stacks
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)|Easy|[C++](./2024/Leetcode/problem20.cpp) [JavaScript](./2023/Leetcode/problem20.js) [Python](./2024/Leetcode/problem20.py)|[YouTube](https://www.youtube.com/watch?v=WTzjTskDFMg)|
|[22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)|Medium|[Python](./2023/Leetcode/problem22.py)|[YouTube](https://www.youtube.com/watch?v=s9fokUqJ76A)|
|[94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)|Easy|[Python](./2023/Leetcode/problem94.py)|[YouTube](https://www.youtube.com/watch?v=g_S5WuasWUE)|
|[150. Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)|Medium|[Python](./2024/Leetcode/problem150.py)|[YouTube](https://www.youtube.com/watch?v=iu0082c4HDE)|
|[1047. Remove All Adjacent Duplicates In String](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)|Easy|[JavaScript](./2024/Leetcode/problem1047.js) [Python](./2023/Leetcode/problem1047.py)|[YouTube](https://www.youtube.com/watch?v=hXEEr5WekSQ)|
|[1209. Remove All Adjacent Duplicates In String II](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/)|Medium|[Python](./2023/Leetcode/problem1209.py)|[YouTube](https://www.youtube.com/watch?v=w6LcypDgC4w)|
|[1614. Maximum Nesting Depth of the Parentheses](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/)|Easy|[Python](./2023/Leetcode/problem1614.py)|[YouTube](https://www.youtube.com/watch?v=kUp-gqHzk6c)|
|[2390. Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/)|Medium|[Python](./2024/Leetcode/problem2390.py)|[YouTube](https://www.youtube.com/watch?v=pRyFZIaKegA)|

### 4. Binary Search
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)|Medium|[Python](./2023/Leetcode/problem34.py)|[YouTube](https://www.youtube.com/watch?v=4sQL7R5ySUU)|
|[35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)|Easy|[Python](./2023/Leetcode/problem35.py)|[YouTube](https://www.youtube.com/watch?v=K-RYzDZkzCI)|
|[69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)|Easy|[C++](./2024/Leetcode/problem69.cpp) [JavaScript](./2023/Leetcode/problem69.js) [Python](./2023/Leetcode/problem69.py)|[YouTube](https://www.youtube.com/watch?v=zdMhGxRWutQ)|
|[162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)|Medium|[Python](./2024/Leetcode/problem162.py)|[YouTube](https://www.youtube.com/watch?v=kMzJy9es7Hc)|
|[222. Count Complete Tree Nodes](https://leetcode.com/problems/count-complete-tree-nodes/)|Easy|[Python](./2024/Leetcode/problem222.py)|[YouTube](https://www.youtube.com/watch?v=4wPlA_InnGY)|
|[374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)|Easy|[JavaScript](./2022/Leetcode/problem374.js) [Python](./2022/Leetcode/problem374.py)|[YouTube](https://www.youtube.com/watch?v=xW4QsTtaCa4)|
|[700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)|Easy|[Python](./2024/Leetcode/problem700.py)|[YouTube](https://www.youtube.com/watch?v=Lr2oxJlnLMM)|
|[704. Binary Search](https://leetcode.com/problems/binary-search/)|Easy|[JavaScript](./2023/Leetcode/problem704.js)|[YouTube](https://www.youtube.com/watch?v=s4DPM8ct1pI)|

### 5. Sliding Window
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)|Medium|[Python](./2022/Leetcode/problem3.py)|[YouTube](https://www.youtube.com/watch?v=wiGpQwVHdE0)|
|[121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)|Easy|[JavaScript](./2023/Leetcode/problem121.js) [Python](./2023/Leetcode/problem121.py)|[YouTube](https://www.youtube.com/watch?v=1pkOgXD63yU)|
|[643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)|Easy|[Python](./2024/Leetcode/problem643.py)|[YouTube](https://www.youtube.com/watch?v=4mBuAZ2Zi0k)|
|[1456. Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)|Medium|[Python](./2024/Leetcode/problem1456.py)|[YouTube](https://www.youtube.com/watch?v=kEfPSzgL-Ss)|
|[1658. Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)|Medium|[Python](./2024/Leetcode/problem1658.py)|[YouTube](https://www.youtube.com/watch?v=xumn16n7njs)|

### 6. Linked List
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)|Medium|[Python](./2023/Leetcode/problem2.py)|[YouTube](https://www.youtube.com/watch?v=XVuQxVej6y8)|
|[19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)|Medium|[Python](./2023/Leetcode/problem19.py)|[YouTube](https://www.youtube.com/watch?v=XIdigk956u0)|
|[21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)|Easy|[JavaScript](./2024/Leetcode/problem21.js) [Python](./2023/Leetcode/problem21.py)|[YouTube](https://www.youtube.com/watch?v=XIdigk956u0)|
|[83. Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)|Easy|[JavaScript](./2024/Leetcode/problem83.js) [Python](./2023/Leetcode/problem83.py)|[YouTube](https://www.youtube.com/watch?v=p10f-VpO4nE)|
|[116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)|Medium|[Python](./2023/Leetcode/problem116.py)|[YouTube](https://www.youtube.com/watch?v=U4hFQCa1Cq0)|
|[141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)|Easy|[JavaScript](./2023/Leetcode/problem141.js) [Python](./2023/Leetcode/problem141.py)|[YouTube](https://www.youtube.com/watch?v=gBTe7lFR3vc)|
|[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)|Easy|[Python](./2024/Leetcode/problem206.py) [TypeScript](./2024/Leetcode/problem206.ts)|[YouTube](https://www.youtube.com/watch?v=G0_I-ZF0S38)|
|[237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list/)|Medium|[C++](./2022/Leetcode/problem237.cpp)|[YouTube](https://www.youtube.com/watch?v=urzP1YbgUnU)|
|[287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)|Medium|[Python](./2024/Leetcode/problem287.py) [TypeScript](./2024/Leetcode/problem287.ts)|[YouTube](https://www.youtube.com/watch?v=wjYnzkAhcNk)|

### 7. Trees
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)|Medium|[C++](./2022/Leetcode/problem98.cpp)|[YouTube](https://www.youtube.com/watch?v=s6ATEkipzow)|
|[100. Same Tree](https://leetcode.com/problems/same-tree/)|Easy|[C++](./2022/Leetcode/problem100.cpp) [JavaScript](./2024/Leetcode/problem100.js) [Python](./2024/Leetcode/problem100.py)|[YouTube](https://www.youtube.com/watch?v=vRbbcKXCxOw)|
|[102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)|Medium|[C++](./2024/Leetcode/problem102.cpp) [Python](./2023/Leetcode/problem102.py)|[YouTube](https://www.youtube.com/watch?v=6ZnyEApgFYg)|
|[103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)|Medium|[Python](./2023/Leetcode/problem103.py)|[YouTube](https://www.youtube.com/watch?v=igbboQbiwqw)|
|[104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)|Easy|[C++](./2022/Leetcode/problem104.cpp) [JavaScript](./2023/Leetcode/problem104.js)|[YouTube](https://www.youtube.com/watch?v=hTM3phVI6YQ)|
|[112. Path Sum](https://leetcode.com/problems/path-sum/)|Easy|[Python](./2024/Leetcode/problem112.py)|[YouTube](https://www.youtube.com/watch?v=LSKQyOz_P8I)|
|[230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)|Medium|[Python](./2023/Leetcode/problem230.py)|[YouTube](https://www.youtube.com/watch?v=5LUXSvjmGCw)|
|[863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)|Medium|[Java](./2023/Leetcode/problem863.java) [Python](./2023/Leetcode/problem863.py)|[YouTube](https://www.youtube.com/watch?v=LQh2g3ygCVU)|
|[1038. Binary Search Tree to Greater Sum Tree](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/)|Medium|[C++](./2022/Leetcode/problem1038.cpp)|[YouTube](https://www.youtube.com/watch?v=4nnl3FrwEYM)|
|[1302. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)|Medium|[C++](./2022/Leetcode/problem1302.cpp) [JavaScript](./2022/Leetcode/problem1302.js)|[YouTube](https://www.youtube.com/watch?v=hM9tzzlRcnM)|

### 8. Design
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[146. LRU Cache](https://leetcode.com/problems/lru-cache/)|Medium|[Python](./2023/Leetcode/problem146.py)|[YouTube](https://www.youtube.com/watch?v=7ABFKPK2hD4)|
|[155. Min Stack](https://leetcode.com/problems/min-stack/)|Medium|[C++](./2024/Leetcode/problem155.cpp) [Python](./2023/Leetcode/problem155.py)|[YouTube](https://www.youtube.com/watch?v=qkLl7nAwDPo)|
|[303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)|Easy|[Python](./2024/Leetcode/problem303.py)|[YouTube](https://www.youtube.com/watch?v=2pndAmo_sMA)|
|[380. Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)|Medium|[C++](./2024/Leetcode/problem380.cpp) [Python](./2023/Leetcode/problem380.py) [TypeScript](./2024/Leetcode/problem380.ts)|[YouTube](https://www.youtube.com/watch?v=j4KwhBziOpg)|
|[535. Encode and Decode TinyURL](https://leetcode.com/problems/encode-and-decode-tinyurl/)|Medium|[Python](./2023/Leetcode/problem535.py)|[YouTube](https://www.youtube.com/watch?v=VyBOaboQLGc)|
|[703. Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)|Easy|[Python](./2023/Leetcode/problem703.py)|[YouTube](https://www.youtube.com/watch?v=hOjcdrqMoQ8)|
|[933. Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)|Easy|[Python](./2024/Leetcode/problem933.py)|[YouTube](https://www.youtube.com/watch?v=604UkiCB3oY)|
|[1603. Design Parking System](https://leetcode.com/problems/design-parking-system/)|Easy|[C++](./2022/Leetcode/problem1603.cpp)|[YouTube](https://www.youtube.com/watch?v=d5zCHesOrSk)|

### 9. Tries
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)|Easy|[Python](./2023/Leetcode/problem14.py)|[YouTube](https://www.youtube.com/watch?v=0sWShKIJoo4)|

### 10. Backtracking
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)|Medium|[Python](./2023/Leetcode/problem17.py)|[YouTube](https://www.youtube.com/watch?v=0snEunUacZY)|
|[46. Permutations](https://leetcode.com/problems/permutations/)|Medium|[Python](./2023/Leetcode/problem46.py)|[YouTube](https://www.youtube.com/watch?v=s7AvT7cGdSo)|
|[77. Combinations](https://leetcode.com/problems/combinations/)|Medium|[Python](./2024/Leetcode/problem77.py)|[YouTube](https://www.youtube.com/watch?v=q0s6m7AiM7o)|
|[78. Subsets](https://leetcode.com/problems/subsets/)|Medium|[Python](./2023/Leetcode/problem78.py)|[YouTube](https://www.youtube.com/watch?v=REOH22Xwdkk)|

### 11. Heap / Priority Queue
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)|Medium|[Python](./2023/Leetcode/problem215.py)|[YouTube](https://www.youtube.com/watch?v=XEmy13g1Qxc)|
|[973. K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)|Medium|[Python](./2024/Leetcode/problem973.py)|[YouTube](https://www.youtube.com/watch?v=rI2EBUEMfTk)|

### 12. Graphs
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[127. Word Ladder](https://leetcode.com/problems/word-ladder/)|Hard|[Python](./2024/Leetcode/problem127.py)|[YouTube](https://www.youtube.com/watch?v=h9iTnkgv05E)|
|[200. Number of Islands](https://leetcode.com/problems/number-of-islands/)|Medium|[Java](./2023/Leetcode/problem200.java) [JavaScript](./2024/Leetcode/problem200.js) [Python](./2023/Leetcode/problem200.py)|[YouTube](https://www.youtube.com/watch?v=pV2kpPD66nE)|
|[207. Course Schedule](https://leetcode.com/problems/course-schedule/)|Medium|[Python](./2024/Leetcode/problem207.py)|[YouTube](https://www.youtube.com/watch?v=EgI5nU9etnU)|
|[399. Evaluate Divison](https://leetcode.com/problems/evaluate-division/)|Medium|[Python](./2023/Leetcode/problem399.py)|[YouTube](https://www.youtube.com/watch?v=Uei1fwDoyKk)|
|[695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/)|Medium|[Java](./2023/Leetcode/problem695.java) [Python](./2023/Leetcode/problem695.py)|[YouTube](https://www.youtube.com/watch?v=iJGr1OtmH0c)|

### 13. 1-D Dynamic Programming
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[32. Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)|Hard|[Python](./2024/Leetcode/problem32.py)|[YouTube](https://www.youtube.com/watch?v=vURq_xYGr-k)|
|[70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)|Easy|[JavaScript](./2023/Leetcode/problem70.js)|[YouTube](https://www.youtube.com/watch?v=Y0lT9Fck7qI)|
|[322. Coin Change](https://leetcode.com/problems/coin-change/)|Medium|[Python](./2024/Leetcode/problem322.py) [TypeScript](./2024/Leetcode/problem322.ts)|[YouTube](https://www.youtube.com/watch?v=H9bfqozjoqs)|
|[392. Is Subsequence](https://leetcode.com/problems/is-subsequence/)|Easy|[Python](./2024/Leetcode/problem392.py)|[YouTube](https://www.youtube.com/watch?v=99RVfqklbCE)|
|[746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)|Easy|[Python](./2024/Leetcode/problem746.py)|[YouTube](https://www.youtube.com/watch?v=ktmzAZWkEZ0)|

### 14. Intervals
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[56. Merge Intervals](https://leetcode.com/problems/merge-intervals/)|Medium|[Python](./2024/Leetcode/problem56.py)|[YouTube](https://www.youtube.com/watch?v=44H3cEC2fFM)|

### 15. Greedy
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)|Medium|[C++](./2024/Leetcode/problem53.cpp) [JavaScript](./2024/Leetcode/problem53.js) [Python](./2024/Leetcode/problem53.py)|[YouTube](https://www.youtube.com/watch?v=5WZl3MMT0Eg)|
|[122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)|Medium|[JavaScript](./2023/Leetcode/problem122.js) [Python](./2023/Leetcode/problem122.py)|[YouTube](https://www.youtube.com/watch?v=3SJ3pUkPQMc)|
|[134. Gas Station](https://leetcode.com/problems/gas-station/)|Medium|[Python](./2023/Leetcode/problem134.py)|[YouTube](https://www.youtube.com/watch?v=lJwbPZGo05A)|
|[680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)|Easy|[Python](./2024/Leetcode/problem680.py)|[YouTube](https://www.youtube.com/watch?v=JrxRYBwG6EI)|
|[2405. Optimal Partition of String](https://leetcode.com/problems/optimal-partition-of-string/)|Medium|[C++](./2024/Leetcode/problem2405.cpp) [Python](./2024/Leetcode/problem2405.py)|[YouTube](https://www.youtube.com/watch?v=CKZPdiXiQf0)|
|[2571. Minimum Operations to Reduce an Integer to 0](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/)|Medium|[Python](./2023/Leetcode/problem2571.py)|[YouTube](https://www.youtube.com/watch?v=O3VbqTLzTu8)|

### 16. Advanced Graphs
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)|Medium|[Python](./2024/Leetcode/problem1584.py)|[YouTube](https://www.youtube.com/watch?v=f7JOBJIC-NA)|

### 17. 2-D Dynamic Programming
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
|[62. Unique Paths](https://leetcode.com/problems/unique-paths/)|Medium|[Python](./2023/Leetcode/problem62.py)|[YouTube](https://www.youtube.com/watch?v=IlEsdxuD4lY)|
|[64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)|Medium|[Python](./2023/Leetcode/problem64.py)|[YouTube](https://www.youtube.com/watch?v=pGMsrvt0fpk)|

### 18. Bit Manipulation
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
[7. Reverse Integer](https://leetcode.com/problems/reverse-integer/)|Medium|[Python](./2023/Leetcode/problem7.py)|[YouTube](https://www.youtube.com/watch?v=HAgLH58IgJQ)|
[67. Add Binary](https://leetcode.com/problems/add-binary/)|Easy|[Python](./2023/Leetcode/problem67.py)|[YouTube](https://www.youtube.com/watch?v=keuWJ47xG8g)|
|[136. Single Number](https://leetcode.com/problems/single-number/)|Easy|[C#](./2023/Leetcode/problem136.cs) [JavaScript](./2023/Leetcode/problem136.js) [Python](./2023/Leetcode/problem136.py)|[YouTube](https://www.youtube.com/watch?v=qMPX1AOa83k)|
|[190. Reverse Bits](https://leetcode.com/problems/reverse-bits/)|Easy|[Python](./2023/Leetcode/problem190.py)|[YouTube](https://www.youtube.com/watch?v=UcoN6UjAI64)|
|[191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)|Easy|[Python](./2023/Leetcode/problem191.py)|[YouTube](https://www.youtube.com/watch?v=5Km3utixwZs)|
|[268. Missing Number](https://leetcode.com/problems/missing-number/)|Easy|[Python](./2023/Leetcode/problem268.py)|[YouTube](https://www.youtube.com/watch?v=WnPLSRLSANE)|
|[338. Counting Bits](https://leetcode.com/problems/counting-bits/)|Easy|[Python](./2024/Leetcode/problem338.py)|[YouTube](https://www.youtube.com/watch?v=RyBM56RIWrM)|
|[2433. Find The Original Array of Prefix Xor](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/)|Medium|[Python](./2022/Leetcode/problem2433.py)|[YouTube](https://www.youtube.com/watch?v=idcT-p_DDrI)|

### 19. Math & Geometry
[🔼 Back to top](#top)

|Problem|Difficulty|Code Solution|Video Solution
|-|-|-|-
[9. Palindrome Number](https://leetcode.com/problems/palindrome-number/)|Easy|[C++](./2022/Leetcode/problem9.cpp)|[YouTube](https://www.youtube.com/watch?v=yubRKwixN-U)|
[13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)|Easy|[C++](./2022/Leetcode/problem13.cpp) [Java](./2023/Leetcode/problem13.java) [JavaScript](./2023/Leetcode/problem13.js)|[YouTube](https://www.youtube.com/watch?v=3jdxYj3DD98)|
[48. Rotate Image](https://leetcode.com/problems/rotate-image/)|Medium|[Python](./2023/Leetcode/problem48.py)|[YouTube](https://www.youtube.com/watch?v=fMSJSS7eO1w)|
|[66. Plus One](https://leetcode.com/problems/plus-one/)|Easy|[Python](./2023/Leetcode/problem66.py)|[YouTube](https://www.youtube.com/watch?v=jIaA8boiG1s)|
|[73. Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)|Medium|[Python](./2023/Leetcode/problem73.py)|[YouTube](https://www.youtube.com/watch?v=T41rL0L3Pnw)|
|[202. Happy Number](https://leetcode.com/problems/happy-number/)|Easy|[JavaScript](./2023/Leetcode/problem202.js) [Python](./2023/Leetcode/problem202.py)|[YouTube](https://www.youtube.com/watch?v=ljz85bxOYJ0)|
|[258. Add Digits](https://leetcode.com/problems/add-digits/)|Easy|[JavaScript](./2023/Leetcode/problem258.js) [Python](./2023/Leetcode/problem258.py)|[YouTube](https://www.youtube.com/watch?v=gGEWzsYZalM)|
|[412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)|Easy|[C++](./2022/Leetcode/problem412.cpp) [Java](./2022/Leetcode/problem412.java) [JavaScript](./2024/Leetcode/problem412.js) [Python](./2024/Leetcode/problem412.py) [TypeScript](./2024/Leetcode/problem412.ts)|[YouTube](https://www.youtube.com/watch?v=1t1_a1BZ04o)|
|[509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)|Easy|[C++](./2022/Leetcode/problem509.cpp) [JavaScript](./2024/Leetcode/problem509.js)|[YouTube](https://www.youtube.com/watch?v=kIzjdvU_QIU)|
|[1492. The kth Factor of n](https://leetcode.com/problems/the-kth-factor-of-n/)|Medium|[Python](./2024/Leetcode/problem1492.py)|[YouTube](https://www.youtube.com/watch?v=UzVQ9zRVsWg)|

## Resources
[🔼 Back to top](#top)

|Website|Description
|-|-
[Pramp](https://www.pramp.com/)|Free Interview Practice
[GitHub](https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/tree/main)|Skill Assessment Quizzes
[UNLV](https://www.unlv.edu/engineering/jobs/resources)|Resume and Interview Tips
[Levels.fyi](https://www.levels.fyi)|Compensation Information 
