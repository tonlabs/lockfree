initSidebarItems({"struct":[["Drainer","A drainer over the queue."],["Inspector","An iterator which inspects a subqueue."],["LooseQueue","A lock-free concurrent queue, but without FIFO garantees on multithreaded environments. Single thread environments still have FIFO garantees. The queue is based on subqueues which threads try to take, modify and then publish. If necessary, subqueues are appended. # Example ```rust extern crate lockfree; use lockfree::prelude::*; use std::{sync::Arc, thread};"]]});