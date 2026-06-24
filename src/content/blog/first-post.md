---
title: "Go Broke My Brain (And Then Fixed It): Package Structure in Go vs Everything Else"
description: "I was just tweaking my folder layout when Go hit me with a compiler error I didn't expect. Here's what I learned about why Go is so strict about package structure — and why that's actually a good thing."
date: 2026-06-24
tags: ["Go", "Beginners", "Package Structure", "Learning"]
---

I'll be honest. I came from a background of tinkering with Python scripts and some Java projects. When I started learning Go and sat down to just *vibe* and write some code without thinking much about file placement — Go slapped me hard with a compiler error before I could even run a `fmt.Println`.

That frustration sent me down a rabbit hole. And what I found genuinely changed how I think about code organization.

## The "Just Works" World I Was Used To

In Python, you can drop a script anywhere and run it. No ceremony, no structure required.

```python
# script.py — lives anywhere, runs freely
print("hello from nowhere in particular")
```

Java has `main`, C++ has `main`, JavaScript has modules — but all of them let you *grow into* structure. You can start messy and clean up later. Structure is optional, a nice-to-have.

I thought Go would be the same. It is not.

## What Go Actually Demands

The moment I tried to put a `func main()` in a file that wasn't declared as `package main`, Go's compiler stopped me cold. No warnings. No "hey maybe fix this." Just a hard stop.

Here's what a **valid** Go entry point looks like:

```go
// main.go
package main

import "fmt"

func main() {
    fmt.Println("Go means business.")
}
```

Simple enough. But here's where I tripped up. I had a random utility file sitting in the same directory, and I forgot to give it a package declaration that matched. The compiler threw:

```
main function in non-main package
```

Then I tried a different approach — I put `package main` in that random file too, thinking "sure, more main, more better." New error:

```
multiple main packages found
```

Go does not negotiate. Every file belongs to exactly one package. The entry point lives in `package main`. Everything else is a named, imported package. Period.

## The Structure Go Wants You to Build

Once I accepted the rules, the layout started making actual sense:

```
myproject/
├── main.go          // package main — the entry point
├── util/
│   └── helpers.go   // package util
├── math/
│   └── calc.go      // package math
└── network/
    └── http.go      // package network
```

`main.go` imports what it needs:

```go
package main

import (
    "myproject/util"
    "myproject/math"
    "myproject/network"
)

func main() {
    util.DoSomething()
    math.Calculate()
    network.Fetch()
}
```

Clean. Intentional. No ambiguity about what belongs where.

## Why Go Does This (And Why I'm Starting to Appreciate It)

At first this felt like Go being unnecessarily strict. But here's the thing I didn't see until I compared it to what happens in other languages at scale.

Python and JavaScript are incredibly fast to start with. But larger Python or JS codebases can turn into what people lovingly call **spaghetti code** — files importing each other in circles, functions living in unexpected places, structure bolted on after the fact.

Go enforces structure from day one. You don't *add* it later when the project grows. It's already there, baked into the compiler. If you write Go wrong, it won't compile. That's not a bug — that's the whole point.

The way I think about it now: Go is optimized for large-scale engineering **by default**. It makes the hard choice easy and the lazy choice impossible.

## The Mental Shift

Here's the reframe that clicked for me:

- **Python/JS/Java** say: *"Start anywhere. Organize later if you want."*
- **Go** says: *"Organize now. Scale is not optional — it's built in."*

Go doesn't trust you to add structure eventually. It requires it upfront, because at scale, "eventually" usually never comes.

## What I Do Now

Every time I start a Go project — even a tiny one — I take two minutes to think about my package layout before writing a single line of code. Which files are utilities? Which package does this function actually belong in? Does this deserve its own directory?

It felt annoying in week one. By week two, it felt like a superpower.

If Go is fighting you on package structure, don't fight back. It's not wrong. It's just already thinking three months ahead of you.

---

*Still learning Go. Still making mistakes. Writing them down so I don't repeat them.*